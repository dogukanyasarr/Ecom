import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FavoriteComponentPropType } from './types'
import { styles } from './style';
import { Image } from '@rneui/base';

const EmtyPage = (props: FavoriteComponentPropType) => {
  return (
    <View>
      <View>
        <Image
        style={styles.image}
        source={require('../../images/emtyfavorite.png')}
        />
      </View>
      <View style={styles.warning}>
        <Text style={styles.warningTitle}>{props.title}</Text>
        <Text style={styles.warningDescription}>{props.description}</Text>
      </View>
      <Pressable style={styles.homePageButton} onPress={props.onPress}>
        <Text style={styles.homePageButtonText}>{props.backHome}</Text>
      </Pressable>   
    </View>
  )
};

export default EmtyPage