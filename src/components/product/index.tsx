import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomePageComponentPropsType } from './types'
import { Image } from '@rneui/base'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Index = (props: HomePageComponentPropsType) => {

  return (
    <View style={styles.dataContainer}>
      <Image
      source={{uri:props.images[0]}}
      style={styles.dataImage}
      />
      <Text style={styles.dataName} numberOfLines={2}>{props.name}</Text>
      <Text numberOfLines={2} style={styles.dataDescription}>{props.description}</Text>
      <Pressable style={styles.dataButton} onPress={props.onPress}>
        <Text style={styles.dataTextButton}>{props.detail}</Text>
      </Pressable>
      <Text numberOfLines={1} style={styles.dataPrice}>{props.price}.00 ₺</Text>

        <TouchableOpacity style={styles.datafavoriteButton} onPress={props.favOnPress}>
          {props.isFavorite
          ? 
          (
            <Icon
            name='favorite'
            style={styles.favIcon}
            />
          )
          :
          (
            <Icon
            name='favorite-border'
            style={styles.homeIcon}
            />

          )
            
          }
        </TouchableOpacity>


    </View>
  )
}

export default Index