import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { SeachComponentType } from './type'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchComponent = (props: SeachComponentType) => {
  return (
    <View style={styles.seachContainer}>
        <TextInput
        style={styles.searchInput}
        placeholder={props.search}
        value={props.value}
        onChangeText={props.onChangeText}
        />
        <TouchableOpacity onPress={props.onPress}>
          <Icon
          name='view-week'
          style={styles.searchIcon}
          />
        </TouchableOpacity>
    </View>
  )
}

export default SearchComponent