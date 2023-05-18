import { View, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const PropertyCard = ({ property, availableRooms, rooms, children, adults, selectedDates, }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View>
      <Pressable style={{ flexDirection: 'row', margin: 15, backgroundColor: 'white' }}>
        <View>
          <Image style={{ height: height / 4, width: width - 280 }} source={{ uri: property.image }} />
        </View>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <Text style={{ width: 200 }}>{property.name}</Text>
            <FontAwesome name='heart' color="red" size={20} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
            <FontAwesome name='star' color="red" size={20} />
            <Text>{property.rating}</Text>
            <View style={{
              backgroundColor: "#6cb4ee",
              padding: 4,
              borderRadius: 10,
              width: 100,
            }}>
              <Text>Genul level</Text>
            </View>
          </View>

          <Text style={{ flexWrap: 'wrap', width: 200, color: 'gray', marginTop: 6, fontWeight: 'bold' }}>{property.address.length > 50 ? property.address.substr(0, 50) : property.address}</Text>

          <Text style=
            {{ marginTop: 5, fontWeight: "700" }}>Price for 1 Night and {adults} adults</Text>
          <View>

            <Text style={{ color: 'red', fontSize: 18, textDecorationStyle: 'line-through' }}>{property.oldPirce * adults}</Text>
            <Text style={{ color: 'black', fontSize: 18, }}>{property.newPrice * adults}</Text>
          </View>


          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>Hotel room : 1 bed</Text>
          </View>

          <View style={{
            backgroundColor: "#6082b6",
            padding: 4,
            borderRadius: 10,
            width: 150,
            paddingVertical: 2,
            marginTop: 2,
            paddingHorizontal: 3
          }}>
            <Text style={{ textAlign: 'center', color: 'white', }}>Limited time deal</Text>
          </View>

        </View>
      </Pressable>
    </View>
  )
}

export default PropertyCard