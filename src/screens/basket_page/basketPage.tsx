import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Title from '../../components/title/title'
import { IndexRouteType } from './type'
import { styles } from './style'
import InputNumeric from '../../components/inputNumericComponent/inputNumeric'
import UserCartStore from '../../store/userCartStore'
import { ProductModel } from '../../types/productModel'
import EmtyPage from '../../components/emtyPage'
import Footer from '../../components/footer/footer'
import UseCountStore from '../../store/useCountStore'

const BasketPage = ({ navigation, route }: IndexRouteType) => {

  const { cart, loadCart, removeFromCart } = UserCartStore();
  const {itemCounts, setItemCount} = UseCountStore();

  useEffect(() => {
    loadCart();
    console.log("Sepet yüklendi:", cart);
  }, []);

  const handleIncrement = (itemId: number) => {
    setItemCount(itemId, (itemCounts[itemId] || 1) + 1)
  }

  const handleDecrease = (itemId: number) => {
    setItemCount(itemId, (itemCounts[itemId] > 1 ? itemCounts[itemId] - 1 : 1))
  }

  const handleCart = (item: ProductModel) => {
    const product = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      images: item.images,
      creationAt: item.creationAt,
      updatedAt: item.updatedAt,
      category: {
        id: item.category.id,
        name: item.category.name,
        image: item.category.image,
        creationAt: item.category.creationAt,
        updatedAt: item.category.updatedAt,
      }
    };
    removeFromCart(item.id);
    console.log("Ürün Favorilerden Çıkarıldı", product)
  }

  const renderItem = ({ item }: { item: ProductModel }) => (
    <View>
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: item.images[0] }}
            style={styles.dataImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.dataName} numberOfLines={2}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.dataDescription}>{item.description}</Text>
          <Text style={{ paddingBottom: 20 }}>
            <InputNumeric
              onCountChange={(newCount) => setItemCount(item.id, newCount)}
              count={itemCounts[item.id] || 1}
              onPressAdd={() => handleIncrement(item.id)}
              onPressRemove={() => handleDecrease(item.id)}
            /></Text>
          <View style={styles.bottomText}>
            <Text style={styles.dataPrice}>{item.price * (itemCounts[item.id] || 1)}.00 ₺</Text>
            <TouchableOpacity onPress={() => { handleCart(item) }}>
              <Text style={styles.dataTextButton}>Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Title title='Sepet' onPress={() => navigation.navigate('Home')} />
      {
        cart.length === 0
          ? 
          (
            <EmtyPage
              image=''
              title='Sepetiniz Boş'
              description='Satın almak istediklerinizi Sepete Ekledikçe Burada Göreceksiniz.'
              backHome='Alışverişe Başla'
              onPress={() => navigation.navigate('Home')}
            />
          )
          : 
          (
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          )
      }
      {
        cart.length !== 0 && (
          <Footer
            title='Toplam'
            price={
              cart.reduce((accumulator, cartItem) => {
                const itemCount = itemCounts[cartItem.id] || 1;
                return accumulator + cartItem.price * itemCount;
              }, 0)
            }
            buttonText='Satın Al'
            onPress={() => { Alert.alert('Siparişiniz Alınmıştır', 'Bizi tercih ettiğiniz için teşekkürler')}}
          />
        )
      }
    </View>
  )
}
export default BasketPage;
