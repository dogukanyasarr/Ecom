import { Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { Pressable, TextInput } from 'react-native';
import { BottomSheetComponentType } from './type';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import UseDataStore from '../../store/useDataStore';

const BottomSheet = (props: BottomSheetComponentType) => {

    const sheetAnimation = useRef(new Animated.Value(0)).current;
    const coverOpacityAnimation = useRef(new Animated.Value(0)).current;

    const { filterByPrice } = UseDataStore();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const [errorMessage, setErrorMessage] = useState('');
    const [isfiltre, setIsFiltre] = useState(true)

    const openSheet = () => {
        Animated.timing(sheetAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
        Animated.timing(coverOpacityAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }

    const closeSheet = () => {
        Animated.timing(sheetAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
        Animated.timing(coverOpacityAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();

    }

    const sheetAnimationInterpolate = sheetAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['-60%', '0%'],

    })

    const coverOpacityAnimationInterpolate = coverOpacityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],

    })

    useEffect(() => {
        if (props.sheetOpen) {
            openSheet();
        }
        else {
            closeSheet();
        }

    }, [props.sheetOpen])

    const handleButtonPress = () => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        if (isNaN(min) || isNaN(max)) {
            setErrorMessage("En Az Bir Filtreleme Yapmalısınız.");
            setTimeout(() => { setErrorMessage("") }, 2000);
        }

        else {
            filterByPrice(min, max)
            setIsFiltre(prev => !prev)
        }
    }
    const clearInput = () => {

        setMinPrice('');
        setMaxPrice('');
        setIsFiltre(prev => !prev)
    }
    return (
        <View style={styles.bottomSheet}>
            <Pressable onPress={() => { props.setSheetOpen(false) }} style={{ pointerEvents: props.sheetOpen ? 'auto' : 'none' }}>
                <Animated.View style={[styles.bottomSheetShadowCover, { opacity: coverOpacityAnimationInterpolate }]} />
            </Pressable>
            <Animated.View style={[styles.bottomSheetMainContainer, { bottom: sheetAnimationInterpolate }]}>
                <Pressable onPress={() => { props.setSheetOpen(false) }} style={[styles.closingBar, { pointerEvents: props.sheetOpen ? 'auto' : 'none' }]} />

                <View style={styles.filtreContainer}>
                    <Text style={styles.bottomSheetTitle}>Filtrele</Text>
                    <View style={styles.bottomSheetInput}>
                        <TextInput
                            style={styles.bottomSheetInputMin}
                            placeholder='En Düşük Fiyat'
                            keyboardType='numeric'
                            value={minPrice}
                            onChangeText={setMinPrice}
                        />
                        <TextInput
                            style={styles.bottomSheetInputMin}
                            placeholder='En Yüksek Fiyat'
                            keyboardType='numeric'
                            value={maxPrice}
                            onChangeText={setMaxPrice}
                        />
                    </View>
                    {
                        errorMessage
                            ?
                            <View style={styles.error}>
                                <Icon
                                    name='report'
                                    style={styles.errorMessageIcon}
                                />
                                <Text style={styles.errorMessageText}>{errorMessage}</Text>
                            </View>
                            :
                            <View style={styles.error}>
                                <Icon
                                    name='report'
                                    style={styles.MessageIcon}
                                />
                                <Text style={styles.MessageText}>Uyarı mesajı bulunmuyor</Text>
                            </View>
                    }
                </View>

                {
                    isfiltre
                        ?
                        (
                            <View style={styles.bottomSheetButton}>
                                <View style={styles.bottomSheetButtonVazgec}>
                                    <TouchableOpacity onPress={() => { props.setSheetOpen(false) }}>
                                        <Text style={styles.bottomSheetTextVazgec}>Vazgeç</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ backgroundColor: 'white' }}>
                                    <Text style={{ paddingHorizontal: 5 }}></Text>
                                </View>
                                <View style={styles.bottomSheetButtonFiltre}>
                                    <TouchableOpacity onPress={() => {handleButtonPress(); props.setSheetOpen(false)}}>
                                        <Text style={styles.bottomSheetTextFiltre}>Filtrele</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                        :
                        (
                            <View style={styles.bottomSheetButton}>
                                <View style={styles.bottomSheetButtonVazgec}>
                                    <TouchableOpacity onPress={clearInput}>
                                        <Text style={styles.bottomSheetTextVazgec}>Temizle</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ backgroundColor: 'white' }}>
                                    <Text style={{ paddingHorizontal: 5 }}></Text>
                                </View>
                                <View style={styles.bottomSheetButtonFiltre}>
                                    <TouchableOpacity onPress={handleButtonPress}>
                                        <Text style={styles.bottomSheetTextFiltre}>Filtrele</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                }

            </Animated.View>
        </View>
    )
};

export default BottomSheet
