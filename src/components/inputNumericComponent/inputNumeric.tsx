import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputNumericComponentPropType } from './type';

const InputNumeric = (props: InputNumericComponentPropType ) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.remove} onPress={props.onPressRemove}>
        <Icon
        style={styles.removeIcon}
        name='remove'
        />
      </TouchableOpacity>      
      <Text style={styles.numericInputText}>{props.count}</Text>
      <TouchableOpacity style={styles.add} onPress={props.onPressAdd}>
        <Icon
        style={styles.addIcon}
        name='add'/>
      </TouchableOpacity>
      
    </View>
  )
}

export default InputNumeric

