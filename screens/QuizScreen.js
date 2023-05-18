import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { blue, white } from '../constants/color';



const QuizScreen = () => {

  const [active, setActive] = useState(1);
  const [selectOpt, setSelectOpt] = useState(null);

  const Q1Route = ({ item }) => {
    return (
      <View style={{ marginTop: 30 }}>
        <Text style={styles.question}>{item.question}</Text>
        <View>
          {item.options.map((opt, index) =>
            <Pressable onPress={() => setSelectOpt(index + 1)}>
              <View style={styles.optionWrapper}>
                <View>
                  <Text style={[styles.sl, selectOpt == (index + 1) ? styles.slActive : ""]}>A</Text>
                </View>
                <View>
                  <Text style={[styles.options, selectOpt == (index + 1) ? { color: blue } : ""]}>{opt.option}</Text>
                </View>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    )

  }


  const data = [
    {
      question: "What is the meaning of UI UX Design ?",
      options: [
        {
          option: "User Interfoce and User Experience",
        },
        {
          option: "User Introface and User Experience",
          status: true
        },
        {
          option: "User Interfice and Using Experience",
        },
      ]
    },

  ]

  const handleTab = (item) => {

  }



  return (
    <>
      <ScrollView>

        <View style={[{ flex: 1, backgroundColor: blue, }]}>
          <View style={styles.headerContainer}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', columnGap: 5 }}>
              <TouchableOpacity>
                <Ionicons size={25} color={white} name="arrow-back" />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: "600", color: white }}>UX</Text>
            </View>
            <Image
              style={styles.image}
              source={{ uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" }} />
          </View>

          <View style={styles.contentWrapper}>

            <View style={styles.tabBar}>
              <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item, index }) => <Pressable>
                  <Text onPress={() => handleTab(index + 1)} style={[styles.tabBtn, active == (index + 1) ? styles.slActive : ""]}>{index + 1}</Text>
                </Pressable>}
              />
            </View>


            <View>
              <FlatList
                data={data}
                renderItem={({ item, index }) => <Q1Route item={item} />}
                keyExtractor={({ i, index }) => index}
              />
            </View>





          </View>

        </View>

        <View style={styles.btnWrapper}>
          <Pressable>
            <FontAwesome style={styles.btnIcon} size={20} color='white' name="angle-left" />
          </Pressable>
          <Pressable>
            <Text style={styles.submitBtn}>Submit Quiz</Text>
          </Pressable>
          <Pressable>
            <FontAwesome style={styles.btnIcon} size={20} color='white' name="angle-right" />
          </Pressable>
        </View>


      </ScrollView>
    </>

  )
}


const styles = StyleSheet.create({



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
    marginTop: 30,
    flex: 1
  },
  tabBar: {
    paddingVertical: 20
  },
  tabBtn: {
    backgroundColor: "#bbb",
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
    width: 40,
    borderRadius: 100,
    fontWeight: "600",
    color: white,
    fontSize: 18,
    marginRight: 10
  },


  question: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444"
  }

  ,
  optionWrapper: {
    columnGap: 10,
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: 'center'
  },

  options: {
    fontSize: 15,
    color: 'black'
  },
  sl: {
    backgroundColor: "#bbb",
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
    width: 40,
    borderRadius: 100,
    fontWeight: "600",
    color: white,
    fontSize: 18
  },
  slActive: {
    backgroundColor: blue
  },

  btnWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    columnGap: 20,
  },

  submitBtn: {
    fontWeight: "600",
    color: blue,
    borderColor: blue,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 10
  }
  ,
  btnIcon: {
    backgroundColor: blue,
    height: 40,
    width: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100
  }


})



export default QuizScreen