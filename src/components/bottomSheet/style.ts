import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'

    },
    bottomSheetShadowCover: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFFb3'

    },
    bottomSheetMainContainer: {
        position: 'absolute',
        zIndex:1,
        height: '60%',
        width: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 12,
        alignItems: 'center'
    },
    closingBar: {
        width: 125,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 20
    },
    filtreContainer: {
        width: '90%',
    },
    bottomSheetTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
        textAlign: 'center'

    },
    bottomSheetInput: {
        width: '100%',


    },
    bottomSheetInputMin: {
        borderWidth: 2,
        fontSize: 18,
        borderColor: 'red',
        borderRadius: 10,
        marginTop: 25,
        paddingLeft: 20,
        paddingVertical: 15
    },
    error: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10

    },
    errorMessageText: {
        color: 'red',
        fontSize: 16,
        marginLeft: 5


    },
    errorMessageIcon: {
        color: 'red',
        fontSize: 16

    },
    MessageIcon:{
        color: 'white',
        fontSize: 16     
    },
    MessageText:{
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    },
    bottomSheetButton: {
        flexDirection: 'row',
        marginTop: 20,
    },
    bottomSheetButtonVazgec: {
    },
    bottomSheetTextVazgec: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 40,
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        paddingHorizontal: 55,
        paddingVertical: 10


    },
    bottomSheetButtonFiltre: {
        backgroundColor: 'red',
        borderRadius: 40,
        paddingHorizontal: 55,
        paddingVertical: 10


    },
    bottomSheetTextFiltre: {
        fontSize: 18,
        color: 'white'
    }
})