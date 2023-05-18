import React from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable } from 'react-native'
import { blue, white } from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContinueQuiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContent}>
        <Image
          style={styles.image}
          source={{ uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" }} />

        <View style={styles.content}>
          <Text style={styles.title}>3D Animation</Text>
          <View style={{ marginTop: 5 }}>
            <View style={styles.icon}>
              <Icon name="book" size={18} color="gray" />

              <Text style={{ color: "#696969", fontSize: 15 }}>10 Question</Text>
            </View>
            <View style={styles.icon}>
              <Icon name="time" size={20} color="gray" />
              <Text style={{ color: "#696969", fontSize: 15 }}>1 hour 15 min</Text>
            </View>
            <Pressable>
              <Text style={styles.cBtn}>Continue Quiz</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <View style={[styles.icon, { alignItems: "flex-start" }]}>
          <Icon name="trash" size={20} color="gray" />
        </View>
      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  imgContent: {
    flex: 2,
    flexDirection: "row",
    columnGap: 15
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    color: blue
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center"
  },
  cBtn: {
    backgroundColor: "black",
    color: white,
    textAlign: "center",
    paddingVertical: 7,
    borderRadius: 5,
    marginTop: 14,
    fontSize: 12
  }
});

export default ContinueQuiz