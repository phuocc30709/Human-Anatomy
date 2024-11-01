import React from 'react'
import Home from '../screens/home/Home'
import { ParamListBase } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Category from '@/screens/home/Category'
import MemberDetail from '@/screens/home/MemberDetail'

interface HomeStackParams {
  Category: {
    name: string
  }
  MemberDetail: {
    name: string
  }
  Home: undefined
}
const Stack = createNativeStackNavigator<HomeStackParams & ParamListBase>()

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
