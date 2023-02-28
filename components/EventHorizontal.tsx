import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';

import { EventType } from '../types/Event';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function EventHorizontal({ event }: { event: EventType }) {
    return (
        <View style={styles.event}>
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
                <Text style={styles.subTitle}>Structure</Text>
                <View style={styles.bottomInfos}>
                    <Text style={styles.time}>10/02/2023 | 15h30</Text>
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
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    event: {
        flexDirection: 'row',
    },
    imageContainer: {
        height: windowWidth * .35,
        aspectRatio: 1,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
        marginRight: 10,
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
        flexDirection: 'column',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    bottomInfos: {
        marginTop: 'auto',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 12,
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
        top: '50%',
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
