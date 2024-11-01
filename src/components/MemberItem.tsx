import { View, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, Image } from 'native-base'
import { TouchableOpacityProps } from 'react-native'

export interface MemberItemProps extends TouchableOpacityProps {
  image: ImageSourcePropType
  name: string
}

export default function MemberItem(props: MemberItemProps) {
  const { image, name, ...rest } = props

  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <Image source={image} style={styles.bg} alt={name} />
      <View style={styles.box}>
        <Text style={{ textAlign: 'center' }}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 135,
    justifyContent: 'space-between',
  },
  bg_image: {
    width: 100,
    height: 100,
  },
  bg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#306599',
  },
  box: {
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
})
