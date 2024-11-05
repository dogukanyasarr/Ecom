import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 15
  },
  dataImage: {
    marginLeft: 20,
    width: 120,
    height: 210,
    resizeMode: 'stretch'
  },
  textContainer: {
    paddingHorizontal: 20
  },
  dataName: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 180,
    color: 'black'
  },
  dataDescription: {
    width: 180,
    fontSize: 16,
    paddingVertical: 20
  },
  bottomText: {
    flexDirection: 'row',
    width: 180,
    justifyContent: 'space-between'
  },
  dataPrice: {
    fontSize: 16,
    color: 'black'
  },
  dataTextButton: {
    fontSize: 16,
    color: 'blue',
    borderBottomWidth: 1
  },
  inputNumeric: {
    marginTop: 600,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '32%'
  },
  footer: {
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