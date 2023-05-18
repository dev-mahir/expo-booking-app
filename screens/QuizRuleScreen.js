import React, { useState } from 'react'
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Note from 'react-native-vector-icons/Foundation';
import { blue, white } from '../constants/color';




const QuizRuleScreen = ({navigation}) => {


  return (
    <>
      <ScrollView>
        <View style={[{ flex: 1, backgroundColor: blue, }]}>
          <View style={styles.headerContainer}>
            <View>
              <TouchableOpacity>
                <Icon size={25} color={white} name="align-left" />
              </TouchableOpacity>
            </View>
            <Image
              style={styles.image}
              source={{ uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" }} />
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: "500", paddingTop: 5, fontSize: 25, color: 'white' }}>HTML Quiz</Text>
            <Text style={{ color: white, fontSize: 15 }}>GET 100 Points</Text>
          </View>

          <View style={styles.contentWrapper}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Brief explanation about this quiz</Text>


            <View style={styles.cardBox}>

              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <Note name="clipboard-notes" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.cardTitle} >10 Question</Text>
                  <Text>5 point for a correct answer</Text>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <Icon name="clock" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.cardTitle} >1 hour 15 min</Text>
                  <Text>Total duration of the quiz</Text>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <Icon name="star" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.cardTitle} >Win 10 star</Text>
                  <Text>Answer all questions correctly</Text>
                </View>
              </View>



            </View>



            <Text style={{ marginTop: 30, color: "#222", fontWeight: "500", fontSize: 18 }}> Please read the text below carefully so you can understand it</Text>

            <View style={{ marginTop: 40 }}>

              <FlatList
                data={[
                  {
                    key: '10 point awarded for a correct answer and no marks for a incorrect answer'
                  },
                  { key: 'Tap on options to select the correct answer' },
                  {
                    key: 'Tap on the bookmark icon to save interesting questions'
                  },
                  {
                    key: "Click submit if you are sure you want to complete all the quizzes"
                  }

                ]}
                renderItem={({ item }) => {
                  return (
                    <View style={{ marginBottom: 10, flex: 1, flexDirection: "row", columnGap: 10 }}>
                      <Text style={{ fontSize: 30, alignSelf: 'flex-start' }}>⋄</Text>
                      <Text style={styles.role}>{item.key}</Text>
                    </View>
                  );
                }}
              />

              <View style={{marginTop: 30}}>
                <Button title='Start' color={blue} onPress={() => navigation.navigate('Quiz')} />
              </View>
            </View>








          </View>











        </View>

      </ScrollView>



    </>

  )
}


const styles = StyleSheet.create({
  loginBtn: {
    color: white,
    fontWeight: "500",
    fontSize: 18
  },
  heightFull: {
    height: Dimensions.get('window').height
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  contentWrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginTop: 30,
    minHeight: Dimensions.get('window').height
  },
  cardBox: {
    marginTop: 20,
    rowGap: 15
  },
  card: {
    flex: 1,
    flexDirection: "row",
    columnGap: 10
  },
  cardTitle: {
    fontSize: 17,
    color: "black",
    fontWeight: "600"
  },
  cardIcon: {
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  }

  ,
  role: {
    fontSize: 15,
    color: '#222'
  }








})



export default QuizRuleScreen