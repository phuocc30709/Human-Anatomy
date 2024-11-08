export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques: "Question 1: What is the largest organ in the human body?",
      ans: ['S', 'K', 'I', 'N'],
    },
    {
      ques: "Question 2: What part of the body pumps blood?",
      ans: ['H', 'E', 'A', 'R', 'T'], 
    },
    {
      ques: "Question 3: What organ is responsible for breathing?",
      ans: ['L', 'U', 'N', 'G'], 
    },
    {
      ques: "Question 4: What is the function of the liver?",
      ans: ['D', 'E', 'T', 'O', 'X', 'I', 'F', 'Y'], 
    },
    {
      ques: "Question 5: What is the basic unit of life?",
      ans: ['C', 'E', 'L', 'L'], // Cell
    },
  ],
  medium: [
    {
      ques: "Question 1: What system controls body movements?",
      ans: ['N', 'E', 'R', 'V', 'O', 'U', 'S'], // Nervous
    },
    {
      ques: "Question 2: What is the main function of red blood cells?",
      ans: ['T', 'R', 'A', 'N', 'S', 'P', 'O', 'R', 'T'], // Transport
    },
    {
      ques: "Question 3: What part of the brain controls balance?",
      ans: ['C', 'E', 'R', 'E', 'B', 'E', 'L', 'L', 'U', 'M'], // Cerebellum
    },
    {
      ques: "Question 4: What is the role of the immune system?",
      ans: ['P', 'R', 'O', 'T', 'E', 'C', 'T'], // Protect
    },
    {
      ques: "Question 5: What organ filters waste from the blood?",
      ans: ['K', 'I', 'D', 'N', 'E', 'Y'], // Kidney
    },
  ],
  hard: [
    {
      ques: "Question 1: What is the function of the pancreas?",
      ans: ['R', 'E', 'G', 'U', 'L', 'A', 'T', 'E'], // Regulate
    },
    {
      ques: "Question 2: What is the primary function of the small intestine?",
      ans: ['A', 'B', 'S', 'O', 'R', 'B'], // Absorb
    },
    {
      ques: "Question 3: What is the role of neurotransmitters?",
      ans: ['C', 'O', 'M', 'M', 'U', 'N', 'I', 'C', 'A', 'T', 'E'], // Communicate
    },
    {
      ques: "Question 4: What is the largest bone in the human body?",
      ans: ['F', 'E', 'M', 'U', 'R'], // Femur
    },
    {
      ques: "Question 5: What is the function of the gallbladder?",
      ans: ['S', 'T', 'O', 'R', 'E'], // Store
    },
  ],
};
