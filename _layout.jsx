import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import {Colors} from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false, 
      tabBarActiveTintColor:Colors.PRIMARY,
      tabBarStyle: {
        height:100,
        paddingBottom:10,
      },
      tabBarLabelStyle: {
        fontSize: 25,
        fontFamily:'mont',
      }
      }}>
      <Tabs.Screen name='home'
      options={{
        tabBarLabel:'Home',
      
        tabBarIcon:({color})=><FontAwesome name="home" size={40} color={color} />
      }}
      />
      <Tabs.Screen name='logs'
      options={{
        tabBarLabel:'Logs',
        tabBarIcon:({color})=><FontAwesome name="book" size={40} color={color} />
      }}
      />
      <Tabs.Screen name='analytics'
      options={{
        tabBarLabel:'Analytics',
        tabBarIcon:({color})=><Entypo name="bar-graph" size={40} color={color} />
      }}
      />
    </Tabs>
  )
}