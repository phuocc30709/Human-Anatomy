import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native'
import React, { useState } from 'react'

export interface CategoryInfoProps extends TouchableHighlightProps {
  image: ImageSourcePropType
  name: string
  title: string
}

export default function CategoryInfo(props: CategoryInfoProps) {
  // const { image, quantity, summary, title, ...rest } = props;
  const { image, name, ...rest } = props
  const [showUnderlay, setShowUnderlay] = useState(false)
  console.log('🚀 ~ CategoryInfo ~ showUnderlay:', showUnderlay)
  return (
    <TouchableHighlight
      style={styles.header}
      onPress={() => {}}
      onShowUnderlay={() => setShowUnderlay(true)}
      onHideUnderlay={() => setShowUnderlay(false)}
      underlayColor="rgba(0,0,0,0)"
      {...rest}
    >
      <View style={styles.body}>
        <ImageBackground source={image} style={styles.imageBody} />
        <Text style={styles.nameBody}>{name}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBody: {
    borderRadius: 6,
    width: 100,
    height: 100,
  },

  nameBody: {
    textAlign: 'center',
    fontSize: 16,
    // height: 100,
  },

  header: {
    marginTop: 20,
    marginHorizontal: 7,
  },
  underlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    // borderLeftRadius: 15,
    borderRadius: 15,
    right: -20,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 15,
    right: -20,
  },
  insectImage: {
    width: '100%',
    height: 180,
    position: 'relative',
    right: -20,
    borderRadius: 15,
    zIndex: 0,
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: 25,
    position: 'absolute',
    left: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  quantity: {
    fontSize: 13,
    color: 'white',
  },
  summary: {
    fontSize: 10,
    color: 'white',
    width: '70%',
    lineHeight: 12.19,
    letterSpacing: 1,
    marginTop: 10,
    fontWeight: '700',
  },
})
