import { CategoryInfoProps } from "../components/CategoryInfo";
import { MemberItemProps } from "../components/MemberItem";

// Use in Home
export const categoriesData: CategoryInfoProps[] = [
  {
    image: require("../../assets/image/Home/respiratorySystem.png"),
    name: 'Respiratory\nSystem',
    title: 'respiratorySystem',
  },

  {
    image: require("../../assets/image/Home/nervousSystem.png"),
    name: 'Nervous\nSystem',
    title: 'nervousSystem',
  },

  {
    image: require("../../assets/image/Home/musculoskeletalSystem.png"),
    name: 'Musculoskeletal\nSystem',
    title: 'musculoskeletalSystem',
  },

  {
    image: require("../../assets/image/Home/maleSystem.png"),
    name: 'Male\nreproductive\nSystem',
    title: 'maleSystem',
  },

  {
    image: require("../../assets/image/Home/femaleSystem.png"),
    name: 'Female\nreproductive\nSystem',
    title: 'femaleSystem',
  },

  {
    image: require("../../assets/image/Home/excretorySystem.png"),
    name: 'Excretory\nSystem',
    title: 'excretorySystem',
  },

  {
    image: require("../../assets/image/Home/endocrineSystem.png"),
    name: 'Endocrine\nSystem',
    title: 'endocrineSystem',
  },

  {
    image: require("../../assets/image/Home/digestiveSystem.png"),
    name: 'Digestive\nSystem',
    title: 'digestiveSystem',
  },
 
  {
    image: require("../../assets/image/Home/circulatorySystem.png"),
    name: 'Circulatory\nSystem',
    title: 'circulatorySystem',
  },
];

export const mammalItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/respiratorySystem/bronchial.png"), name: 'bronchial' },
  { image: require("../../assets/image/Home/respiratorySystem/lungs.png"), name: 'lungs' },
  { image: require("../../assets/image/Home/respiratorySystem/nose.png"), name: 'nose' },
  { image: require("../../assets/image/Home/respiratorySystem/sinuses.png"), name: 'sinuses' },
  { image: require("../../assets/image/Home/respiratorySystem/trachea.png"), name: 'trachea' },
  { image: require("../../assets/image/Home/respiratorySystem/pharynx.png"), name: 'pharynx' },
];

export const reptileItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/nervousSystem/spinal.png"), name: 'spinal' },
  { image: require("../../assets/image/Home/nervousSystem/nerves.png"), name: 'nerves' },
  { image: require("../../assets/image/Home/nervousSystem/brain.png"), name: 'brain' },
];

export const insectItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/musculoskeletalSystem/skeletal.png"), name: 'skeletal' },
  { image: require("../../assets/image/Home/musculoskeletalSystem/muscles.jpg"), name: 'muscles' },
];

export const featheredItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/maleSystem/ejaculatoryDuct.png"), name: 'ejaculatoryDuct' },
  { image: require("../../assets/image/Home/maleSystem/epididymis.png"), name: 'epididymis' },
  { image: require("../../assets/image/Home/maleSystem/maleUrethra.png"), name: 'maleUrethra' },
  { image: require("../../assets/image/Home/maleSystem/penis.png"), name: 'penis' },
  { image: require("../../assets/image/Home/maleSystem/prostateGland.png"), name: 'prostateGland' },
  { image: require("../../assets/image/Home/maleSystem/scrotum.png"), name: 'scrotum' },
  { image: require("../../assets/image/Home/maleSystem/seminalVesicles.png"), name: 'seminalVesicles' },
  { image: require("../../assets/image/Home/maleSystem/testicles.png"), name: 'testicles' },
  { image: require("../../assets/image/Home/maleSystem/vas.png"), name: 'vas' },
];

export const crustaceanItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/femaleSystem/fallopian.png"), name: 'fallopian' },
  { image: require("../../assets/image/Home/femaleSystem/ovaries.png"), name: 'ovaries' },
  { image: require("../../assets/image/Home/femaleSystem/uterus.png"), name: 'uterus' },
  { image: require("../../assets/image/Home/femaleSystem/vagina.png"), name: 'vagina' },
];

export const amphibiansItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/excretorySystem/bladder.png"), name: 'bladder' },
  { image: require("../../assets/image/Home/excretorySystem/kidney.png"), name: 'kidney' },
  { image: require("../../assets/image/Home/excretorySystem/ureters.png"), name: 'ureters' },
  { image: require("../../assets/image/Home/excretorySystem/urethra.png"), name: 'urethra' },
];

export const nerveItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/endocrineSystem/endocrineSystem.png"), name: 'endocrineSystem' },
];

export const endoctineItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/digestiveSystem/stomach.png"), name: 'stomach' },
  { image: require("../../assets/image/Home/digestiveSystem/smallIntestine.png"), name: 'smallIntestine' },
  { image: require("../../assets/image/Home/digestiveSystem/rectum.png"), name: 'rectum' },
  { image: require("../../assets/image/Home/digestiveSystem/pancreas.png"), name: 'pancreas' },
  { image: require("../../assets/image/Home/digestiveSystem/mouth.png"), name: 'mouth' },
  { image: require("../../assets/image/Home/digestiveSystem/liver.png"), name: 'liver' },
  { image: require("../../assets/image/Home/digestiveSystem/gallbladder.png"), name: 'gallbladder' },
  { image: require("../../assets/image/Home/digestiveSystem/esophagus.png"), name: 'esophagus' },
  { image: require("../../assets/image/Home/digestiveSystem/colon.png"), name: 'colon' },
  { image: require("../../assets/image/Home/digestiveSystem/anus.png"), name: 'anus' },
];

export const reproductiveItems: MemberItemProps[] = [
  { image: require("../../assets/image/Home/circulatorySystem/heart.png"), name: 'heart' },
  { image: require("../../assets/image/Home/circulatorySystem/bloodVessels.png"), name: 'bloodVessels' },
  { image: require("../../assets/image/Home/circulatorySystem/blood.png"), name: 'blood' },
];