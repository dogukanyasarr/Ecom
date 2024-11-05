import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    productImageContainer: {
        height: 260
    },
    productImage: {
        height: '100%',
        resizeMode: 'stretch',
        width: '100%'
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    productTextContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    productDescription: {
        paddingVertical: 15

    },
    productIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        position: 'absolute',
        bottom: '92%'
    },
    backIcon: {
        fontSize: 30,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5
    },
    inFavIcon: {
        fontSize: 30,
        color: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 100,
        padding: 5,
        marginLeft: 290

    },
    favIcon: {
        fontSize: 30,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 100,
        padding: 5,
        marginLeft: 290
    },
    inputNumeric: {
        marginTop: 600,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '32%'
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingVertical: 15,
        elevation: 20
    },
    footerText: {
        color: 'black'
    },
    footerPriceText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }

})