import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonComponentType } from './type'
import { styles } from './style'

const Button = (props : ButtonComponentType) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button