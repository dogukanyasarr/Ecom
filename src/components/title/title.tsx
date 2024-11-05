import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { TitleComponentType } from './type';

const Title = (props:TitleComponentType) => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarTitle}>{props.title}</Text>
        <Icon
        name='arrow-back'
        style={styles.appBarIcon}
        onPress={props.onPress}
        />
    </View>
  )
}


export default Title