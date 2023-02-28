import { FlatList, ScrollView, StyleSheet } from 'react-native';
import Event from '../components/Event';
import Structure from '../components/Structure';
import Category from '../components/Category';

import { Text, View } from '../components/Themed';
import { categoriesApi, nextEventsApi, structuresApi } from '../services/Api';
import { categoryEvent } from '../types/Category';
import { EventType } from '../types/Event';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
    const nextEvents: EventType[] = nextEventsApi();
    const structures: any = structuresApi();
    const categoriesEvent: categoryEvent[] = categoriesApi();

    const renderEvent = ({item}: {item: any}) => (
        <Event event={item} />
    )

    const renderStructure = ({item}: {item: any}) => (
        <Structure structure={item} />
    )

    const renderCategories = ({item}: {item: any}) => (
        <Category category={item} />
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
                        keyExtractor={(item: any, index) => {return item.id}}
                        horizontal = {true}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Les structures</Text>
                    <FlatList
                        data = {structures}
                        renderItem = {renderStructure}
                        keyExtractor={(item: any, index) => {return item.id}}
                        horizontal = {true}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Évènements</Text>
                    <FlatList
                        data = {categoriesEvent}
                        renderItem = {renderCategories}
                        keyExtractor={(item: any, index) => {return item.id}}
                        horizontal = {true}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
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