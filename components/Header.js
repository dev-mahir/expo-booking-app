import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { darkBlue, white } from '../constants/color'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: darkBlue,
        height: 65,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
      }}>
      <Pressable style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderColor: white, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
        <FontAwesome name="bed" size={20} color='white' />
        <Text style={{ color: 'white', fontSize: 15 }}> Stays</Text>
      </Pressable>

      <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="plane" size={20} color='white' />
        <Text style={{ color: 'white', fontSize: 15 }}> Flights</Text>
      </Pressable>

      <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="car" size={20} color='white' />
        <Text style={{ color: 'white', fontSize: 15 }}> Car Rental</Text>
      </Pressable>

      <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Fontisto name="uber" size={20} color='white' />
        <Text style={{ color: 'white', fontSize: 15 }}> Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

})