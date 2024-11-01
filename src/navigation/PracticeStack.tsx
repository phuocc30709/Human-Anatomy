import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import PracticeHome from '@/screens/practice/PracticeHome'
import Practice from '@/screens/practice/Practice'
import PracticeResult from '@/screens/practice/PracticeResult'

interface PracticeStackParams {
  PracticeHomeScreen: {
    name: string
  }
  PracticeScreen: {
    name: string
  }
  PracticeResultScreen: undefined
}
const Stack = createNativeStackNavigator<PracticeStackParams & ParamListBase>()

export default function PracticeStack() {
  return (
    <Stack.Navigator initialRouteName="PracticeHome">
      <Stack.Screen
        name="PracticeHomeScreen"
        component={PracticeHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PracticeScreen" component={Practice} options={{ headerShown: false }} />
      <Stack.Screen
        name="PracticeResultScreen"
        component={PracticeResult}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
