import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
  ],
  medium: [
    {
      ques:"Question 1: : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
  ],
  hard: [
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
    {
      ques:"Question : : ",
      ans:['','','','','','',''],
    },
  ],
};
