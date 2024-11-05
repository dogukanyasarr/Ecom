import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../button/button'
import { FooterComponentType } from './type'

const Footer = (props : FooterComponentType) => {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.footerText}>{props.title}</Text>
          <Text style={styles.footerPriceText}>{props.price}.00 ₺</Text>
        </View>

        <Button
        text={props.buttonText}
        onPress={props.onPress}
        />
      </View> 
    </View>
  )
}

export default Footer