import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { MemberImageProps } from '../components/MemberImage'
import {
  amphibiansItems,
  crustaceanItems,
  featheredItems,
  insectItems,
  mammalItems,
  reptileItems,
  nerveItems,
  endoctineItems,
  reproductiveItems,
} from './category'

export interface MemberItemProps extends TouchableOpacityProps {
  image: ImageSourcePropType
  name: string
}

export const headerSlide: MemberImageProps[] = [
  {
    name: 'Respiratory System',
    image: require('../../assets/image/Home/respiratorySystem/bronchial.png'),
  },
  { name: 'Nervous System', image: require('../../assets/image/Home/nervousSystem/brain.png') },
  { name: 'Digestive System', image: require('../../assets/image/Home/digestiveSystem/colon.png') },
]

// CategoryData
interface CategoryData {
  [key: string]: MemberItemProps[]
}

export const categoryData: CategoryData = {
  respiratorySystem: mammalItems,
  nervousSystem: reptileItems,
  musculoskeletalSystem: insectItems,
  maleSystem: featheredItems,
  femaleSystem: crustaceanItems,
  excretorySystem: amphibiansItems,
  endocrineSystem: nerveItems,
  digestiveSystem: endoctineItems,
  circulatorySystem: reproductiveItems,
}
