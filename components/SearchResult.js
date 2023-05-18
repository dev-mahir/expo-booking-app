import { FlatList, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react';

import { useNavigation } from '@react-navigation/native';


const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View >
  

      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }

            return (
              <Pressable 
                onPress={() => { 
                  setInput(item.place);
                  navigation.navigate('Home', {
                    input: item.place
                  });
                }}
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                gap: 10,
              }}>
                <View>
                  <Image source={{ uri:item.placeImage }}
                    style={{ width: 70, height: 70 }} />
                </View>
                <View>
                  <Text>{item.place}</Text>
                  <Text>{item.shortDescription}</Text>
                  <Text>{item.properties.length}</Text>
                </View>
              </Pressable>
            )
          }

        }}


      />
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({})