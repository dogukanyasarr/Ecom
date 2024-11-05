import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
        height:'100%'
    },
    appBar:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'rgba(211, 211, 211, 0.5)',
        paddingVertical:15,
    },
    appBarTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        textAlign:'center'
    },
    appBarIcon:{
        fontSize:24,
        color:'black',
        position:'absolute',
        marginVertical:15,
        marginHorizontal:10

    }
})