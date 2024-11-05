import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    footerContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:22,
        paddingVertical:15,
        elevation:20 
    },
    footerText:{
        color:'black'
    },
    footerPriceText:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    }

})