import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './tab'

export type RootStackParamList = {
  Tab: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  )
}
