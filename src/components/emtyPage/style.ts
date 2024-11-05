import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    image:{
        marginTop:100,
        marginBottom:5,
        width:250,
        height:280,
        marginHorizontal:75
    },
    warning:{
        alignItems:'center'
    },
    warningTitle:{
        fontSize:28,
        fontWeight:'bold',
        color:'darkblue',
    },
    warningDescription:{
        fontSize:17,
        marginHorizontal:5,
        color:'gray',
        textAlign:'center',
    },
    homePageButton:{
        backgroundColor:'red',
        width:'80%',
        borderRadius:30,
        alignSelf:'center',
        marginTop:'30%',
        paddingVertical:15
    },
    homePageButtonText:{
        textAlign:'center',
        color:'white',
        fontSize:16
    }

})