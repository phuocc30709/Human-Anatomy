import { ImageSourcePropType, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { Image, Text, View } from "native-base";

export interface MemberImageProps {
  image: ImageSourcePropType;
  name?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export default function MemberImage(props: MemberImageProps) {
  const { image, name, wrapperStyle } = props;

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Image source={image} width="100%" height="100%" alt="Animal" />
      {name && (
        <View style={styles.box}>
          <Text bold>{name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    height: 275,
  },
  box: {
    width: "90%",
    height: 50,
    backgroundColor: "#F2F2F2",
    position: "absolute",
    bottom: 42,
    left: "5%",
    borderRadius: 5,
    justifyContent: "center",
    paddingLeft: 16,
    opacity: 0.85,
  },
});
