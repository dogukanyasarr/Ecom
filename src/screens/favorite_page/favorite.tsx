import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style';
import { IndexRouteType } from './type';
import Title from '../../components/title/title';
import EmtyPage from '../../components/emtyPage';
import { FlatList } from 'react-native-gesture-handler';
import Index from '../../components/product';
import UseFavStore from '../../store/useFavStore';
import { ProductModel } from '../../types/productModel';


const Favorite = ({ navigation, route }: IndexRouteType) => {

  const { fav, loadFav, removeFromFav } = UseFavStore();

  useEffect(() => {
    loadFav();
    console.log("Ürün favorilere eklendi", fav)

  }, [])

  const handleFav = (item: ProductModel) => {
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
    removeFromFav(item.id);
    console.log("Ürün Favorilerden Çıkarıldı", product)
  }

  const renderItem = ({ item }: { item: any }) => (
    <Index
      images={item.images}
      name={item.title}
      description={item.description}
      detail='İncele'
      price={item.price}
      id={item.id}
      onPress={() => {
        navigation.navigate('Product', {
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
            updatedAt: item.category.updatedAt
          }
        });
      }}
      favOnPress={() => { handleFav(item) }}
      isFavorite={fav.some(favItem => favItem.id === item.id)}
    />

  );

  return (
    <View style={styles.container}>
      <Title title='Favoriler' onPress={() => navigation.goBack()} />
      {
        fav.length === 0 ? (
          <EmtyPage
            image=''
            title='Favori Listeniz Boş'
            description='Beğendiklerinizi Favorilere Ekledikçe Burada Görebileceksiniz'
            backHome='Ana Sayfaya Dön'
            onPress={() => navigation.goBack()}
          />
        )
          :
          (
            <FlatList
              data={fav}
              horizontal={false}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )

      }
    </View>
  )

}
export default Favorite