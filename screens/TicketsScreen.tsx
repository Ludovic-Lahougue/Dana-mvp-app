import React, { useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout'

import { Text, View } from '../components/Themed';
import { EventType } from '../types/Event';
import { ticketsApi } from '../services/Api';
import EventHorizontal from '../components/EventHorizontal';

const listTab = [
    {
        status: 'Liste',
    },
    {
        status: 'Carte'
    }
]

export default function TicketsScreen() {
    const events: EventType[] = ticketsApi();

    const renderEvent = ({item}: {item: any}) => (
        <EventHorizontal event={item} />
    )

    const ItemSeparatorComponent = () => (
        <View style={{height: 10}} />
    )

    const [status, setStatus] = useState('Liste');
    const setStatusFilter = (status: string) => {
        setStatus(status);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Mes billets</Text>

            <Text style={styles.sort}>Trier par :</Text>

            <FlatList
                data={events}
                renderItem={renderEvent}
                keyExtractor={(item: any, index) => {return item.id}}
                ItemSeparatorComponent={ItemSeparatorComponent}
                showsHorizontalScrollIndicator={false}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 30,
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    btnTabActive: {
        backgroundColor: '#331863'
    },
    textTabActive: {
        color: '#fff',
    },
    sort: {
        marginBottom: 10,
        fontSize: 20,
    }
});