import { StyleSheet, Text, Dimensions, Platform, StatusBar } from 'react-native'
import { Button, Image, Stack, View } from 'native-base'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { practiceData } from '../../db/practice'
import { useRoute } from '@react-navigation/native'
import { EStatus } from '@/components/CharacterBox'
import { QuizInput } from 'react-native-quiz-input'

const show: { [key: string]: string } = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
}

const Practice = () => {
  const [status, setStatus] = useState<EStatus[]>([EStatus.NORMAL, EStatus.NORMAL, EStatus.NORMAL])

  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const [currQues] = useState(0)
  const level: string = route.params.level ? route.params.level : 'easy'
  const [correct, setCorrect] = useState<boolean | null>(null)

  // const [typedWord, setTypedWord] = useState('')

  const onChange = (data: any) => {
    const ans = practiceData[level][currQues].ans
    if (data.wordString.length == ans.length) {
      const ansText = ans.join('')
      setCorrect(ansText === data.wordString)
    } else {
      // setTypedWord(data.wordString);
      setCorrect(null)
    }
  }

  const onPress = (i: number) => () => {
    const newStatus = [...status]
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL
    }
    newStatus[i] = EStatus.CORRECT
    setStatus(newStatus)
  }

  return (
    <Stack style={styles.container}>
      {Platform.OS == 'android' && <StatusBar barStyle="light-content" />}
      <View style={styles.header}>
        <Text style={styles.text_main}>PRACTICE WITH ZOODY</Text>
        <Text style={styles.text_level}>Level: {show[level]}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text__ques}>{practiceData[level][currQues].ques}</Text>
      </View>
      <View style={styles.box__choose}>
        <QuizInput
          size="large"
          borderColor="#3D7944"
          wordStructure={practiceData[level][currQues].ans.map(() => true)}
          onChange={onChange}
        />
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Button
          style={styles.btn}
          key={level}
          onPress={() => navigation.navigate('PracticeResultScreen', { level: level })}
        >
          <Text style={{ color: '#3D7944' }}>Continue</Text>
        </Button>
      </View>

      {correct != null && <Text>{correct ? 'CORRECT' : 'IN_CORRECT'}</Text>}
    </Stack>
  )
}

export default Practice

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '30%',
    backgroundColor: '#FFF9EC',
    alignItems: 'center',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  text_main: {
    color: '#A1783F',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 80,
  },
  text_level: {
    color: '#3D7944',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  main: {
    marginTop: 40,
    alignItems: 'center',
  },
  text__ques: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '700',
  },
  btn: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FCD02E',
  },
  box__choose: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  choose: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
})
