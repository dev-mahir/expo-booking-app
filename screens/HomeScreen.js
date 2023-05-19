import React, { useLayoutEffect, useState } from 'react'
import { Dimensions, StyleSheet, View, Pressable, Text, ScrollView, TextInput, Button, Modal, Alert } from 'react-native'
import { black, blue, darkBlue, white } from '../constants/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalFooter, ModalButton, ModalContent, ModalTitle, SlideAnimation, } from 'react-native-modals'

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);



  const searchPlaces = (place) => {
    if (!route.params || !selectedDate) {
      showAlert()
    }
    if (route.params && selectedDate) {
      navigation.navigate('Places',
        {
          place,
          date: selectedDate,
          rooms,
          children,
          adults
        })
    }

  }

  const showAlert = () =>
    Alert.alert('Invalid details',
      'Please enter all details', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      tabBarLabel: 'Home',
      headerTitle: 'Booking.com',
      headerRight: () => (
        <FontAwesome name="bell" size={20} color="white" style={{ marginRight: 12 }} />
      ),
    })
  }, [])



  // calender 
  const customButton = (onConfirm) => {
    return (
      <Pressable
        primary
        onPress={onConfirm}
      >
        <Text style={{
          width: 300,
          marginHorizontal: "3%",
          backgroundColor: darkBlue,
          paddingVertical: 10,
          textAlign: 'center',
          color: "white",
          fontWeight: "700",
          fontSize: 20
        }}>Submit</Text>
      </Pressable>
    )
  }


  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              rowGap: 10
            }}
          >
            {/* Designation  */}
            <Pressable
              style={styles.textInput}
              onPress={() => navigation.navigate('Search')}>
              <Feather name="search" size={20} color={black} />
              <Text style={{ padding: 15 }}>{route?.params ? route.params.input : "Enter your destination"}</Text>
            </Pressable>

            {/* selected dates  */}
            <Pressable
              style={styles.textInput}
              onPress={() => { }}>
              <Feather name="calendar" size={20} color={black} />

              <DatePicker
                style={{
                  height: 50,
                  borderWidth: 0,
                  padding: 0,
                  marginRight: 'auto'

                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    color: black,
                    marginRight: 'auto'
                  },
                  headerMarkTitle: {},
                  headerDateTitle: {},
                  contentInput: {},
                  contentText: {},
                  headerStyle: {
                    backgroundColor: darkBlue,
                    marginRight: 'auto'
                  },
                }}
                allowFontScaling={false}
                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) => setSelectedDate(startDate, endDate)}
                mode={'range'}
              />
            </Pressable>



            {/* rooms and guests  */}
            <Pressable
              style={styles.textInput}
              onPress={() => setModalVisible(true)}>
              <Feather name="user" size={20} color={black} />
              <Text style={{ paddingVertical: 14, color: black, fontSize: 15 }}>{rooms} Room - {adults} adults - {children} children</Text>
            </Pressable>



            {/* search button  */}
            <Pressable
              onPress={() => searchPlaces(route?.params?.input)}>
              <Text style={styles.searchBtn}>Search</Text>
            </Pressable>
          </View>

          <Text style={{
            fontSize: 15,
            fontWeight: "500"
            ,
            color: black,
            paddingHorizontal: 20
          }}> Travel More spend less        </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

            style={{ paddingHorizontal: 20 }}>

            <Pressable style={{
              width: 200, marginTop: 10, backgroundColor: darkBlue, borderRadius: 10, padding: 20, marginRight: 15
            }}>
              <Text style={{
                color: white, fontSize: 15, fontWeight: "bold", marginVertical: 7
              }}>Genius</Text>
              <Text style={{ color: white, fontWeight: "500", }}>You are ate genius level one in our loyalty program</Text>
            </Pressable>

            <Pressable style={{
              width: 200, marginTop: 10, backgroundColor: darkBlue, borderRadius: 10, padding: 20, marginRight: 15
            }}>
              <Text style={{
                color: white, fontSize: 15, fontWeight: "bold", marginVertical: 7
              }}>Genius</Text>
              <Text style={{ color: white, fontWeight: "500", }}>You are ate genius level one in our loyalty program</Text>
            </Pressable>

            <Pressable style={{
              width: 200, marginTop: 10, backgroundColor: darkBlue, borderRadius: 10, padding: 20, marginRight: 15
            }}>
              <Text style={{
                color: white, fontSize: 15, fontWeight: "bold", marginVertical: 7
              }}>15% Discount</Text>
              <Text style={{ color: white, fontWeight: "500", }}> Complete 5 stays to unlock level 2</Text>
            </Pressable>



          </ScrollView>







        </ScrollView>



      </View>



      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: white,
                backgroundColor: "#003580",
                zIndex: 1000
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>





    </>
  )
}


const styles = StyleSheet.create({


  textInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: "#ffc72c",
    borderWidth: 3,
    borderRadius: 6
  },
  searchBtn: {
    backgroundColor: blue,
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 10,
    color: white,
  }
})

export default HomeScreen;