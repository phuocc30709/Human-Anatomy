import { Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView, View } from 'native-base'
import { useRoute } from '@react-navigation/native'
import Header from '@/components/Header'
import { memberDetailData } from '@/db/memberdetail'

export default function MemberDetail() {
  const route = useRoute<any>()
  const title = route.params.name

  const name = route.params.name ? route.params.name : 'zebra'
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#306599' }} />
        <Header title={title} />

        <View style={{ width: '79%', marginHorizontal: '10.5%', marginTop: 10 }}>
          <View style={{ marginTop: 10 }}>
            {memberDetailData[name].intro.map((text) => (
              <Text style={{ fontWeight: 'normal', marginTop: 10, fontSize: 16 }} key={text}>
                {text}
              </Text>
            ))}
          </View>

          <View>
            {memberDetailData[name].func.map((text) => (
              <Text style={{ fontWeight: 'normal', marginTop: 10, fontSize: 16 }} key={text}>
                {text}
              </Text>
            ))}
          </View>

          <View>
            {memberDetailData[name].anatomy.map((text) => (
              <Text style={{ fontWeight: 'normal', marginTop: 10, fontSize: 16 }} key={text}>
                {text}
              </Text>
            ))}
          </View>
        </View>
        <View style={{ height: 10 }}></View>
      </ScrollView>
    </View>
  )
}
