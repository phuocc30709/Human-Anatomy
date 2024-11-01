import IconBottomTab from '@/components/IconBottomTab'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import HomeStack from './HomeStack'
import QuizzStack from './QuizzStack'
import PracticeStack from './PracticeStack'
// import QuizzStack from './QuizzStack'
// import PracticeStack from './PracticeStack'

const Tab = createBottomTabNavigator()

interface TabOptions {
  route: RouteProp<ParamListBase>
  navigation: any
}

interface TabBarIconProps {
  focused: boolean
  color: string
  size: number
}

const options = (props: TabOptions): BottomTabNavigationOptions => {
  const { route } = props
  const tabBarIcon = ({ focused }: TabBarIconProps) => {
    return <IconBottomTab name={route.name} focused={focused} />
  }

  return {
    tabBarIcon,
    headerShown: false,
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#B8B8B8',
    tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: { paddingVertical: 4, backgroundColor: '#306599' },
  }
}

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} options={options} />
      <Tab.Screen name="Quizz" component={QuizzStack} options={options} />
      <Tab.Screen name="Practice" component={PracticeStack} options={options} />
    </Tab.Navigator>
  )
}
