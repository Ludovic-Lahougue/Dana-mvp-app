import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr'
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { EventType } from '../types/Event';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


export default function EventInfoScreen({route, navigation}: any) {
    if (route.params == undefined) return;
    const event: EventType = route.params.event;
    Moment.locale('fr');
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{event.name}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={ event.image}
                    />  
                </View>
                <Text style={styles.structure}>Structure</Text>
                <Text style={styles.date}>{Moment(event.date).format('D MMMM YYYY à hh:mm')}</Text>
                <Text style={styles.resume}>{event.resume}</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, styles.buttonBlack]}>
                        <Text style={[styles.buttonText, styles.buttonTextBlack]}>Réserver ma place</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>S'y rendre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: windowWidth * .05,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    imageContainer: {
        width: '100%',
        height: windowHeight * .5,
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
    structure: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    resume: {
        marginVertical: 10,
        paddingHorizontal: 15
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonBlack: {
        backgroundColor: '#000'
    },
    buttonTextBlack: {
        color: '#fff',
    }
});