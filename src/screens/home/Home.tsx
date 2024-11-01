/* eslint-disable react/no-unescaped-entities */
import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView, Stack, Text, View } from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { categoriesData } from '@/db/category'
import Header from '@/components/Header'
import CategoryInfo from '@/components/CategoryInfo'

export default function Home() {
  const navigation = useNavigation<any>()
  return (
    <ScrollView width="100%" bg="white">
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#306599' }} />
      <Header title="Daily body's story" />
      <Stack marginTop={8} bg="white">
        <Text paddingX={8} fontSize={18} bold>
          OUR'S BODY
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {categoriesData.map((item: any, index: any) => (
            <CategoryInfo
              key={index}
              onPress={() => {
                navigation.navigate('Category', { name: item.title })
              }}
              {...item}
            />
          ))}
        </View>
        <View marginBottom={50}></View>
      </Stack>
    </ScrollView>
  )
}
