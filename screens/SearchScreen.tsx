import React, { useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout'

import { Text, View } from '../components/Themed';
import { EventType } from '../types/Event';
import { eventsApi } from '../services/Api';
import EventHorizontal from '../components/EventHorizontal';

const listTab = [
    {
        status: 'Liste',
    },
    {
        status: 'Carte'
    }
]

export default function SearchScreen() {
    const events: EventType[] = eventsApi();

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
            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                        <TouchableOpacity
                            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

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
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
    },
    btnTab: {
        width: Layout.window.width * .4,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#331863',
        paddingVertical: 5,
        paddingHorizontal: 25,
        marginHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 16,
    },
    btnTabActive: {
        backgroundColor: '#331863'
    },
    textTabActive: {
        color: '#fff',
    }
});