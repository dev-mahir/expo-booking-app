import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { blue } from '../constants/color';
const Search = () => {
  
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Icon color={blue} name="search" size={20} />
        <TextInput style={styles.searchInput}
          placeholderTextColor="#999"
          placeholder='Search' />
      </View>
    </View>
  )

}



const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical: 20
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15
  },

  searchInput: {
    flex: 1,
    paddingLeft: 15,
    color: "gray"
  }
})






export default Search