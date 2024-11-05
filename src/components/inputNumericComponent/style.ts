import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
      },
      add:{
        borderWidth:2,
        borderColor:'lightgray',
        borderRadius:5,
        textAlign:'center',
        padding:10    
      },
      addIcon:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    
      },
      numericInputText:{
        marginHorizontal:16,
        borderWidth:2,
        borderColor:'lightgray',
        borderRadius:5,
        textAlign:'center',
        color:'black',
        paddingVertical:10,
        paddingHorizontal:15
      },
      remove:{
        borderWidth:2,
        borderColor:'lightgray',
        borderRadius:5,
        textAlign:'center',
        padding:10
    
      },
      removeIcon:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
      }
})