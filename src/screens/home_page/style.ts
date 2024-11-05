import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homePageBg:{
        backgroundColor:'white'

    },
    loadingBar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loadingImage:{
        height:100,
        width:100,
        borderRadius:100,
        margin:10

    },
    loadingText: {
        fontSize:20,


    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'rgba(211, 211, 211, 0.5)',
        paddingVertical: 20
    },
    favorite: {

    },
    favIcon: {
        fontSize: 24,
        color: 'red'


    },
    title: {

    },
    titleName: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black'
    },
    basket: {

    },
    basketContainer: {

    },
    basketText: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 100,
        fontSize: 7,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginTop: 10,
        fontWeight: 'bold'

    },
    basketIcon: {
        fontSize: 24,
        color: 'black'


    },
    seachContainer: {
        borderWidth: 1,
        marginTop: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(211, 211, 211, 0.5)',
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    filterTittle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 13,
        marginBottom: 5
    },
    filterText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'

    },
    filterCleanButton: {
        fontSize: 16,
        fontWeight: '500',
        color: 'blue',
        borderBottomWidth: 1,
        borderColor: 'blue'
    }
})