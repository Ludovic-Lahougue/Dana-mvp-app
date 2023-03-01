import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Image, Pressable } from 'react-native';

import { EventType } from '../types/Event';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function Event({ event }: { event: EventType }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.event}
            onPress={() => navigation.navigate('EventInfoScreen', {event: event})}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={ event.image}
                    resizeMode="cover"
                />
                <Text style={styles.category}>{event.category.name}</Text>
            </View>
            <View style={styles.infos}>
                <Text style={styles.title}>{event.name}</Text>
                <Text style={styles.time}>6h</Text>
            </View>
            <View style={styles.infos}>
                {event.discount == null ?
                    <Text style={styles.price}>{event.price}€</Text>
                :
                    <View style={styles.prices}>
                        <View style={styles.oldPrice}>
                            <Text style={styles.oldPriceValue}>{event.price}€</Text>
                            <View style={styles.oldPriceDash}></View>
                        </View>
                        <Text style={styles.price}>{event.discount}€</Text>
                    </View>
                }
                <Text style={styles.tickets}>{event.tickets} place{event.tickets == 1 ? '' : 's'}</Text>
            </View>
        </Pressable>
        );
}
    
const styles = StyleSheet.create({
    event: {
        width: windowWidth * .35,
    },
    imageContainer: {
        width: '100%',
        height: windowWidth * .35,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
    },
    image: {
        flex: 1,
        borderRadius: 9,
        width: undefined,
        height: undefined,
    },
    category: {
        position: 'absolute',
        top: '10%',
        backgroundColor: '#00000088',
        color: '#fff',
        fontWeight: 'bold',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: 3
    },
    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',
    },
    time: {
        color: '#999999'
    },
    prices: {
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center',
    },
    oldPrice: {
        position: 'relative',
        marginRight: 5,
    },
    oldPriceValue: {
        alignSelf: 'center',
        color: '#999999',
        fontSize: 12,
    },
    oldPriceDash: {
        position: 'absolute',
        top: '40%',
        left: '0%',
        width: '100%',
        backgroundColor: '#ec5d39',
        height: 1,
    },
    tickets: {
        backgroundColor: '#dcdcdc',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 50,
        fontSize: 10,
    }
});
