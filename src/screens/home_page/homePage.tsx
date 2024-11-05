import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import UseDataStore from '../../store/useDataStore';
import { ProductModel } from '../../types/productModel';
import Index from '../../components/product';
import { styles } from './style';
import SearchComponent from '../../components/seach';
import { IndexRouteType } from './type';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UseFavStore from '../../store/useFavStore';
import UserCartStore from '../../store/userCartStore';
import BottomSheet from '../../components/bottomSheet';
import { Image } from '@rneui/base';

const HomePage = ({ navigation, route }: IndexRouteType) => {

    const { data, isLoading, fetchData, filteredProduct, filterByTitle, } = UseDataStore();
    const filteredProductPrice = UseDataStore((state) => state.filteredProductPrice);
    const resetFilteredProductPrice = UseDataStore((state) => state.resetFilteredProductPrice)

    const [searchTerm, setSearchTerm] = useState('');

    const { cart, loadCart } = UserCartStore();
    const { fav, addToFav, removeFromFav, loadFav } = UseFavStore();

    const [sheetOpen, setSheetOpen] = useState(false)

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        loadFav();
    }, [])

    useEffect(() => {
        loadCart();
    }, []);

    useEffect(() => {
        filterByTitle(searchTerm);
    }, [searchTerm, filterByTitle]);

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
        if (fav.some(favItem => favItem.id === item.id)) {
            removeFromFav(item.id)
        }
        else {
            addToFav(product)

        }

    }
    const renderItem = ({ item }: { item: ProductModel }) => {
        return (
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

                favOnPress={() => handleFav(item)}
                isFavorite={fav.some(favItem => favItem.id === item.id)}
            />
        )
    };


    const clearSearch = () => {
        setSearchTerm('');
        resetFilteredProductPrice();
    }

    
    if (isLoading) {
        return (
            <View style={styles.loadingBar}>
                <Image
                    style={styles.loadingImage}
                    source={require('../../images/passologo.png')}
                />
            </View>

        )
    }
    return (
        <View style={styles.homePageBg}>
            <View style={styles.appBar}>
                <View style={styles.favorite}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Favorite')
                    }}>
                        {
                            fav.length !== 0
                                ?
                                (
                                    <Icon
                                        name='favorite'
                                        style={styles.favIcon}
                                    />
                                )
                                :
                                null
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleName}>Passo E-Commerece</Text>
                </View>
                <View style={styles.basket}>
                    <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
                        {
                            cart.length !== 0
                                ?
                                (
                                    <View>
                                        <View>
                                            <Text style={styles.basketText}>{cart.length}</Text>
                                        </View>
                                        <Icon
                                            name='shopping-cart'
                                            style={styles.basketIcon}
                                        />
                                    </View>
                                )
                                :
                                (
                                    null
                                )
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <SearchComponent
                search='Ara...'
                onPress={() => setSheetOpen(true)}
                value={searchTerm}
                onChangeText={setSearchTerm}
            />


            <View>
                {
                    (searchTerm) || (filteredProductPrice.length > 0)
                        ?
                        (
                            <View>
                                <View style={styles.filterTittle}>
                                    <Text style={styles.filterText}>Bulunan Sonuçlar</Text>
                                    <TouchableOpacity onPress={clearSearch}>
                                        <Text style={styles.filterCleanButton}>Aramayı Temizle</Text>
                                    </TouchableOpacity>
                                </View>

                                <FlatList
                                    data={searchTerm ? filteredProduct : filteredProductPrice}
                                    horizontal={false}
                                    numColumns={2}
                                    contentContainerStyle={{ margin: 4, paddingBottom: 540 }}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderItem}
                                />
                            </View>
                        )
                        :
                        (
                            <FlatList
                                data={data}
                                horizontal={false}
                                numColumns={2}
                                contentContainerStyle={{ margin: 4, paddingBottom: 240 }}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderItem}
                            />
                        )
                }
            </View>
            <BottomSheet
                sheetOpen={sheetOpen}
                setSheetOpen={setSheetOpen}
            />

        </View>
    )
};

export default HomePage