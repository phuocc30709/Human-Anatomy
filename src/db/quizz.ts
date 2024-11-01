import { ImageSourcePropType } from "react-native";


export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require('../../assets/image/easy/Blood.jpg'),
      ques:"Question 1: What are the blood components?",
      choose:['red blood cells, white blood cells','plasma, red blood cells, white blood cells, and platelets','red blood cells, white blood cells, and platelets'],
      ans: 1
    },
    {
      image: require('../../assets/image/easy/Bloodvessels.jpg'),
      ques:"Question 2: What are the functions of blood vessels?",
      choose:['To deliver blood and carry waste products,','To take CO2 away from your organs and tissues', 'All correct'],
      ans: 2
    },
    {
      image: require('../../assets/image/easy/heart.jpg'),
      ques:"Question 3: Where is the heart located?",
      choose:['On the left side of your body','Between your right and left lungs','All correct'],
      ans: 1
    },
    {
      image: require('../../assets/image/easy/Anus.jpg'),
      ques:"Question 4: How long the anus is?",
      choose:['2 inch','3 inch','4 inch'],
      ans: 0
    },
    {
      image: require('../../assets/image/easy/smallintestine.png'),
      ques:"Question 5: Is the large intestine or the small intestine longer?",
      choose:['Arge intestine','Small intestine','The same'],
      ans: 1
    },
    {
      image: require('../../assets/image/easy/Esophagus.jpg'),
      ques:"Question 6: What is the length of the esophagus?",
      choose:['8-10 inch','9-12 inch', '10-13 inch'],
      ans: 2
    },
    {
      image: require('../../assets/image/easy/gallbladder.png'),
      ques:"Question 7: What is the bile?",
      choose:['Bile is a mixture of mainly cholesterol, bilirubin and bile salts','Bile is a mixture of mainly cholesterol, fats and bile salts','Bile is a mixture of mainly cholesterol, bilirubin, fats and bile salts'],
      ans: 0
    },
    {
      image: require('../../assets/image/easy/liver.jpg'),
      ques:"Question 8: Which is the function of the liver?",
      choose:['To help absorb and digest fats','To regulate blood sugar levels','To clean toxins (harmful substances) out of the blood'],
      ans: 2
    },
    {
      image: require('../../assets/image/easy/Pancreas.png'),
      ques:"Question 9: Which roles the pancreas are in charge of?",
      choose:['As an endocrine gland and as a part of the digestive system','As a part of excretory system and as a part of the digestive system','As a part of the digestive system'],
      ans: 0
    },
    {
      image: require('../../assets/image/easy/rectum.jpg'),
      ques:"Question 10: How does the rectum work?",
      choose:['Colon delivers stool to rectum, let you know and pooped out','Rectum receives stool from the colon, let you know that there is stool to be evacuated (pooped out) and to hold the stool until evacuation happens', 'Sensors of rectum send a message to the brain let you know about the appearance of gas or stool and then pooped out'],
      ans: 1
    },
  ],
  medium: [
    {
      image: require('../../assets/image/medium/Endocrinesystem.jpg'),
      ques:"Question 1: What is the endocrine system made of?",
      choose:['Hormones','Glands','Red blood cells'],
      ans: 1
    },
    {
      image: require('../../assets/image/medium/Fallopian.jpg'),
      ques:"Question 2: Where does fertilization happen?",
      choose:['Stomach','Ovary', 'Fallopian tubes'],
      ans: 2
    },
    {
      image: require('../../assets/image/medium/ovaries.jpg'),
      ques:"Question 3: How does the ovary size grow?",
      choose:['The average size of an ovary is around 5 centimeters, and declines every decade of life once you turn 40','The size of the ovaries is related to age. The average size of an ovary is around 3-6 centimeters and increases in size with each decade of life','The average size of an ovary is around 4 centimeters, and declines every decade of life once you turn 30'],
      ans: 2
    },
    {
      image: require('../../assets/image/medium/Uterus.png'),
      ques:"Question 4: What is the uterus function?",
      choose:['Pregnancy, Fertility, Menstrual cycle','Hormones control, Pregnancy','Egg protection, Pregnancy, Fertility'],
      ans: 0
    },
    {
      image: require('../../assets/image/medium/Vagina.jpg'),
      ques:"Question 5: Where is vagina located?",
      choose:['Between two fallopian tubes','Between your bladder and your rectum','Between your bladder and your uterus'],
      ans: 1
    },
    {
      image: require('../../assets/image/medium/Vasdeferens.jpeg'),
      ques:"Question 6: What is the process of sperm movement in the male reproductive system?",
      choose:['The sperm move from the testes, through the epididymis, and into the vas deferens prior to being mixed with various secretions at the time of ejaculation','The sperm are produced from the prostate gland, through the epididymis, and into the vas deferens, then come out during ejaculation.','The sperm move from the testes, through ejaculatory ducts where the sperm mature and gain additional function, then into the epididymis and come out.'],
      ans: 0
    },
    {
      image: require('../../assets/image/medium/penis.jpg'),
      ques:"Question 7: Why does the erection of penis happen?",
      choose:['The penis fills with urine','The penis fills with semen','The penis fills with blood'],
      ans: 2
    },
    {
      image: require('../../assets/image/medium/Prostategland.png'),
      ques:"Question 8: What is the main function of the prostate gland?",
      choose:['Helping to produce semen','Producing and storing sperm','Transporting mature sperm to the urethra'],
      ans: 0
    },
    {
      image: require('../../assets/image/medium/Muscles.jpg'),
      ques:"Question 9: How many skeletal muscles in the human body?",
      choose:['400','600','800'],
      ans: 1
    },
    {
      image: require('../../assets/image/medium/SkeletalSystem.jpg'),
      ques:"Question 10: Which is NOT the function of the skeletal system?",
      choose:['Produces blood cells','Maintains your blood pressure','Protects and supports organs'],
      ans: 1
    },
  ],
  hard: [
    {
      image: require('../../assets/image/hard/brain.jpg'),
      ques:"Question 1: Which is part of the brain responsible for elements that require thinking?",
      choose:['Cerebrum','Cerebellum','Brain stem'],
      ans: 0
    },
    {
      image: require('../../assets/image/hard/nerves.png'),
      ques:"Question 2: Where do most nerves start?",
      choose:['Heart','Nerves cells','Spinal cord'],
      ans: 2
    },
    {
      image: require('../../assets/image/hard/lungs.jpg'),
      ques:"Question 3: How does the respiratory system prevent harmful substances from entering your lungs?",
      choose:['Small hairs in your nose','Mucus in your trachea and bronchial, and the sweeping motion of cilia','All correct'],
      ans: 2
    },
    {
      image: require('../../assets/image/hard/lungs.png'),
      ques:"Question 4: How long do the lungs make oxygen available to your body and remove other gases from your body?",
      choose:['3-5s','5-7s','7-9s'],
      ans: 0
    },
    {
      image: require('../../assets/image/hard/bronchial.jpg'),
      ques:"Question 5: Where is the bronchi in the respiratory system?",
      choose:['Left lung','Right lung','Throughout both lungs'],
      ans: 2
    },
    {
      image: require('../../assets/image/hard/pharynx.jpg'),
      ques:"Question 6: What does the pharynx look like?",
      choose:['Tube','Funnel','Oval'],
      ans: 1
    },
    {
      image: require('../../assets/image/hard/bladder.png'),
      ques:"Question 7: How much urine can the bladder hold at a time?",
      choose:['500ml','600ml','700ml'],
      ans: 0
    },
    {
      image: require('../../assets/image/hard/kidney.png'),
      ques:"Question 8: What is the main role of the kidneys?",
      choose:['Bringing urine to the bladder','Maintaining homeostasis that keep the internal environment of the body consistent and comfortable','Monitoring the amount of hormones in your blood'],
      ans: 1
    },
    {
      image: require('../../assets/image/hard/urethra.png'),
      ques:"Question 9: What are the main differences between male and female urethra?",
      choose:['The function','The starting point','The number of organ systems it belongs to'],
      ans: 2
    },
    {
      image: require('../../assets/image/hard/Humananatomy.jpg'),
      ques:"Question 10: How many main organs in the human body?",
      choose:['78 organs','74 organs','71 organs'],
      ans: 0
    },
  ],
};
