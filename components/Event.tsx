import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { EventType } from '../types/Event';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function Event({ event }: { event: EventType }) {
    return (
        <View>
            <View style={styles.image}></View>
            <View style={styles.infos}>
                <Text style={styles.title}>{event.name}</Text>
                <Text style={styles.time}>6h</Text>
            </View>
            <View style={styles.infos}>
                {event.discount == null ?
                    <Text style={styles.price}>{event.price}€</Text>
                :
                    <View style={styles.prices}>
                        <Text style={styles.oldPrice}>{event.price}€</Text>
                        <Text style={styles.price}>{event.discount}€</Text>
                    </View>
                }
                <Text style={styles.tickets}>{event.tickets} place{event.tickets == 1 ? '' : 's'}</Text>
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    image: {
        padding: windowWidth * .2,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
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
        color: '#999999',
        textDecorationLine: 'line-through',
        textDecorationColor: '#000',
        textDecorationStyle: 'solid',
        marginRight: 5,
        fontSize: 12,
        alignSelf: 'center',
    },
    tickets: {
        backgroundColor: '#dcdcdc',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 50,
        fontSize: 10,
    }
});
