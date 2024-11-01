import React from 'react'
import { Icon, IInputProps, Input } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

export interface SearchBarProps extends IInputProps {}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Input
      h={50}
      InputRightElement={
        <Icon as={<MaterialIcons name="search" />} size="xl" mr={2} color="muted.400" />
      }
      placeholder="What are you looking for?"
      size={16}
      backgroundColor="#FFF"
      {...props}
    />
  )
}
