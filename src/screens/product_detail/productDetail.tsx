import { View, Text, Alert } from 'react-native'
import React from 'react'
import { IndexRouteType } from './type';
import { Image } from '@rneui/base';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import InputNumeric from '../../components/inputNumericComponent/inputNumeric';
import UserCartStore from '../../store/userCartStore';
import Footer from '../../components/footer/footer';
import { ProductModel } from '../../types/productModel';
import UseFavStore from '../../store/useFavStore';
import UseCountStore from '../../store/useCountStore';

const ProductDetail = ({ navigation, route }: IndexRouteType) => {
  const parameters = route.params;

  const { addToCart } = UserCartStore();
  const { fav } = UseFavStore()
  const { cart } = UserCartStore();
  const { itemCounts, setItemCount } = UseCountStore();

  const handleIncrement = (itemId: number) => {
    setItemCount(itemId, (itemCounts[itemId] || 1) + 1)
  }
  const handleDecrease = (itemId: number) => {
    setItemCount(itemId, (itemCounts[itemId] > 1 ? itemCounts[itemId] - 1 : 1))
  }

  const handleBuy = (parameters: ProductModel) => {
    const product = {
      id: parameters.id,
      title: parameters.title,
      price: parameters.price,
      description: parameters.description,
      images: parameters.images,
      creationAt: parameters.creationAt,
      updatedAt: parameters.updatedAt,
      category: {
        id: parameters.category.id,
        name: parameters.category.name,
        image: parameters.category.image,
        creationAt: parameters.category.creationAt,
        updatedAt: parameters.category.updatedAt,
      }
    };

    addToCart(product);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{ uri: parameters.images[0] }}
        />
      </View>
      <View style={styles.productTextContainer}>
        <Text style={styles.productTitle}>{parameters.title}</Text>
        <Text style={styles.productDescription}>{parameters.description}</Text>
      </View>
      <View style={styles.productIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name='arrow-back'
            color='black'
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {
            fav.some(favItem => favItem.id === parameters.id)
              ?
              (
                <Icon
                  name='favorite'
                  style={styles.inFavIcon}
                />
              )
              :
              (
                <Icon
                  name='favorite-border'
                  style={styles.favIcon}
                />
              )
          }
        </TouchableOpacity>
      </View>
      <View style={styles.inputNumeric}>
        <InputNumeric
          onCountChange={(newCount) => setItemCount(parameters.id, newCount)}
          count={itemCounts[parameters.id] || 1}
          onPressAdd={() => handleIncrement(parameters.id)}
          onPressRemove={() => handleDecrease(parameters.id)}
        />

      </View>
      <Footer
        title='Toplam'
        price={parameters.price * (itemCounts[parameters.id] || 1)}
        buttonText='Satın Al'
        onPress={() => {
          {
            cart.some(CartItem => CartItem.id === parameters.id)
              ?
              (
                Alert.alert("Ürün Sepetinizde Mevcut", "Bu ürün zaten sepetinizde bulunmaktadır.")

              )
              :
              (
                handleBuy(parameters),
                navigation.navigate('Basket')
              )
          }
        }}

      />

    </View>
  )
}

export default ProductDetail