import { FlatList, ScrollView, StyleSheet } from 'react-native';
import Event from '../../components/Event';
import Structure from '../../components/Structure';

import { Text, View } from '../../components/Themed';
import { nextEventsApi, structuresApi } from '../../services/Api';
import { EventType } from '../../types/Event';
import { StructureType } from '../../types/Structure';

export default function home() {
    const nextEvents: EventType[] = nextEventsApi();
    const structures: any = structuresApi();

    const renderEvent = ({item}: {item: any}) => (
        <Event event = {item} />
    )

    const renderStructure = ({item}: {item: any}) => (
        <Structure structure = {item} />
    )

    const ItemSeparatorComponent = () => (
        <View style={{width: 20}} />
    )

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <Text style={styles.title}>Maintenant</Text>
                    <FlatList
                        data = {nextEvents}
                        renderItem = {renderEvent}
                        horizontal = {true}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Les structures</Text>
                    <FlatList
                        data = {structures}
                        renderItem = {renderStructure}
                        horizontal = {true}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    section: {
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});