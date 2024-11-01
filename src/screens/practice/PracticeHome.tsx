import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import { Image, Stack } from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface LevelInfo {
  text: string
  level: string
}

const levels: LevelInfo[] = [
  { text: 'Easy', level: 'easy' },
  { text: 'Medium', level: 'medium' },
  { text: 'Hard', level: 'hard' },
]

const PracticeHome = () => {
  const navigation = useNavigation<any>()
  return (
    <Stack style={{ height: '100%', backgroundColor: '#F5F5F5' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textmain}>PRACTICE WITH ZOODY</Text>
        {levels.map((info) => (
          <TouchableOpacity
            style={styles.box}
            key={info.level}
            onPress={() => navigation.navigate('PracticeScreen', { level: info.level })}
          >
            <Text style={styles.text}>{info.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Stack>
  )
}
export default PracticeHome

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmain: {
    color: '#1F405F',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  box: {
    width: '70%',
    height: 41,
    backgroundColor: '#1F405F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
  },
})
