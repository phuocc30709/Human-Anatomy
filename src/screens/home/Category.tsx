import { ScrollView, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Stack, View } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '@/components/Header'
import MemberItem from '@/components/MemberItem'
import { categoryData } from '@/db'

export default function Category() {
  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const title = route.params.name

  return (
    <Stack>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#306599' }} />

      <Header title={title} />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 4,
            justifyContent: 'center',
          }}
        >
          {categoryData[title].map((info: any, index: number) => (
            <View
              style={{ marginHorizontal: 15, marginVertical: 15 }}
              key={info.name + String(index)}
            >
              <MemberItem
                {...info}
                onPress={() => navigation.navigate('MemberDetail', { name: info.name })}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </Stack>
  )
}
