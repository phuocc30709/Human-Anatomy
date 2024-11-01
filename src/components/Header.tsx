import { Platform, StatusBar, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import { Stack, Text } from 'native-base'

export interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  const { title } = props

  return (
    <View>
      <Stack
        bg="#306599"
        width="100%"
        borderBottomRadius={20}
        paddingX={8}
        justifyContent="flex-start"
      >
        {Platform.OS == 'android' && <StatusBar barStyle="light-content" />}
        <SearchBar marginTop={2} />
        <Text
          textTransform="uppercase"
          bold
          fontSize={20}
          marginTop={6}
          marginBottom={4}
          color="white"
        >
          {title}
        </Text>
      </Stack>
    </View>
  )
}
