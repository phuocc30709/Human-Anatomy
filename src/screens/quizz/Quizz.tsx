import { StyleSheet, Text, Dimensions, Platform, Image } from "react-native";
import { Button, ScrollView, Stack, View } from "native-base";
import React, { useState } from "react";
import TextBox, { EStatus } from "../../components/TextBox";
import { useNavigation } from "@react-navigation/native";
import { quizzData } from "../../db/quizz";
import { useRoute } from "@react-navigation/native";

const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy" },
  { text: "Medium", level: "medium" },
  { text: "Hard", level: "hard" },
];

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const Quizz = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [next, setNext] = useState(false);
  const [point, setPoint] = useState(0);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params.level ? route.params.level : "easy";
  const [img, setImg] = useState(quizzData[level][currQues].image);

  const onPress = (i: number) => () => {
    const ans = quizzData[level][currQues].ans;
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.DISABLE;
    }
    if (i == ans) {
      newStatus[i] = EStatus.CORRECT;
      setPoint(point + 1);
    } else {
      newStatus[ans] = EStatus.CORRECT;
      newStatus[i] = EStatus.IN_CORRECT;
    }
    setNext(true);
    setStatus(newStatus);
  };

  const onNext = () => {
    if (currQues < quizzData[level].length - 1) {
      setCurrQues(currQues + 1);
      setNext(false);

      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setImg(quizzData[level][currQues + 1].image);
      setStatus(newStatus);
    } else {
      navigation.navigate("ResultScreen", { level: level, point });
    }
  };

  return (
    <Stack style={{ height: "100%" }}>
      <View height={Platform.OS == "android" ? 0 : 44} bg="#3D7944" />
      <View style={styles.container}>
        <Text style={styles.text_main}>ZOODY'S QUIZ</Text>
        <Text style={styles.text_level}>Level: {show[level]}</Text>
        <Image
          style={{
            width: imgWidth,
            height: Math.round((159 / 290) * imgWidth),
          }}
          source={img}
        />
        <Text style={styles.text_ques}>{quizzData[level][currQues].ques}</Text>
      </View>
      <View>
        {quizzData[level][currQues]["choose"].map((item, i) => (
          <TextBox
            key={item}
            status={status[i]}
            onPress={onPress(i)}
            content={item}
            style={styles.btn}
          />
        ))}
      </View>
      <View
        style={{ height: 50, justifyContent: "center", marginVertical: 20 }}
        flexDirection="row"
      >
        <Button
          style={styles.btn__stop}
          onPress={() => navigation.navigate("QuizzHomeScreen")}
        >
          <Text
            style={{
              color: "#1F405F",
            }}
          >
            Stop
          </Text>
        </Button>
        {next && (
          <Button style={styles.btn__continue} onPress={onNext}>
            {currQues === quizzData[level].length - 1 ? "Stop" : "Continue"}
          </Button>
        )}
      </View>
    </Stack>
  );
};

export default Quizz;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
  },
  text_level: {
    color: "#1F405F",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text_ques: {
    maxWidth: "90%",
    marginVertical: 30,
    fontSize: 18,
    fontWeight: "700",
    color: "#1F405F",
  },
  box: {
    width: "70%",
    height: 41,
    backgroundColor: "#1F405F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
  },
  btn: {
    marginBottom: 8,
  },
  btn__stop: {
    backgroundColor: "#FFFFFF",
    borderColor: "#1F405F",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  btn__continue: {
    backgroundColor: "#1F405F",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
