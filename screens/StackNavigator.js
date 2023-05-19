import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text, Button } from 'react-native'
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import UserScreen from './UserScreen';
import SearchScreen from './SearchScreen';
import PlacesScreen from './PlacesScreen';
import MapScreen from './MapScreen';
import PropertyInfo from './PropertyInfoScreen';
import PropertyInfoScreen from './PropertyInfoScreen';
import RoomsScreen from './RoomsScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {


  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#003580',
              height: 80,
              borderBottomColor: 'transparent',
              shadowColor: 'transparent',
            },
            tabBarIcon: ({ focused }) => focused ? <FontAwesome color="#003580" size={20} name='home' /> : <Ionicons color="black" size={20} name='home-outline' />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => focused ? <FontAwesome color="#003580" size={20} name='user' /> : <Feather color="black" size={20} name='user' />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Place"
          component={PlacesScreen}
          options={{
            tabBarLabel: 'Places',
            tabBarIcon: ({ focused }) => focused ? <FontAwesome color="#003580" size={20} name='user' /> : <Feather color="black" size={20} name='user' />,
            headerShown: false
          }}
        />
      </Tab.Navigator>
    )
  }




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Places' component={PlacesScreen}/>
        <Stack.Screen name='Map' component={MapScreen}/>
        <Stack.Screen name='PropertyInfo' component={PropertyInfoScreen}/>
        <Stack.Screen name='Rooms' component={RoomsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator