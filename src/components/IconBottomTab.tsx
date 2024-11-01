import { Image, ImageSourcePropType } from 'react-native'
import React from 'react'

export interface IconBottomTabProps {
  name: string
  focused: boolean
}

const imagePaths: { [key: string]: ImageSourcePropType } = {
  home: require('../../assets/icons/home.png'),
  homeFocused: require('../../assets/icons/home-focused.png'),
  quizz: require('../../assets/icons/quizz.png'),
  quizzFocused: require('../../assets/icons/quizz-focused.png'),
  practice: require('../../assets/icons/practice.png'),
  practiceFocused: require('../../assets/icons/practice-focused.png'),
  profile: require('../../assets/icons/profile.png'),
  profileFocused: require('../../assets/icons/profile-focused.png'),
}

export default function IconBottomTab(props: IconBottomTabProps) {
  const { name, focused } = props
  const imgName = !focused ? name.toLowerCase() : name.toLowerCase() + 'Focused'

  return <Image source={imagePaths[imgName]} className="size-6" alt={imgName} />
}
