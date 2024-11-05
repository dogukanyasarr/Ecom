import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    dataContainer:{
        flex:1,
        borderRadius:10,
        width:'50%',
        alignSelf:'center',
        justifyContent:'center',
        marginVertical:10,
        marginHorizontal:5,
        backgroundColor: 'white',
        elevation:5
    },
    dataImage:{
        width:'100%',
        height:200

    },
    dataName:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        paddingHorizontal:10,
        marginVertical:5
    },
    dataDescription:{
        fontSize:14,
        paddingHorizontal:10,
        marginBottom:5

    },
    dataButton:{
        backgroundColor:'red',
        alignItems:'center',
        width:'80%',
        alignSelf:'center',
        borderRadius:20,
        paddingVertical:8,
        marginVertical:15
    },
    dataTextButton:{
        fontSize:16,
        color:'white'

    },
    dataPrice:{
        position:'absolute',
        backgroundColor:'white',
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        paddingVertical:6,
        paddingHorizontal:40,
        borderRadius:5,    
        top: 156
    },
    datafavoriteButton:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius:100,
        padding:7,
        position:'absolute',
        top:7,
        right: 10

    },
    favIcon:{
        fontSize:24,
        color:'red'
    },
    homeIcon:{
        fontSize:24,
        color:'white'
    }
})