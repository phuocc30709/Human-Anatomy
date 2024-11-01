import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import QuizzHome from '@/screens/quizz/QuizzHome'
import Quizz from '@/screens/quizz/Quizz'
import Result from '@/screens/quizz/Result'

interface QuizzStackParams {
  QuizzHomeScreen: {
    name: string
  }
  QuizzScreen: {
    name: string
  }
  ResultScreen: undefined
}

const Stack = createNativeStackNavigator<QuizzStackParams & ParamListBase>()

export default function QuizzStack() {
  return (
    <Stack.Navigator initialRouteName="QuizzHome">
      <Stack.Screen name="QuizzHomeScreen" component={QuizzHome} options={{ headerShown: false }} />
      <Stack.Screen name="QuizzScreen" component={Quizz} options={{ headerShown: false }} />
      <Stack.Screen name="ResultScreen" component={Result} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
