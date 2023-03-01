import { FlatList, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { getUser } from '../services/Api';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen() {
    const defaultImage = require('../assets/images/profile/default.png')
    const user = getUser();
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {
                        user.image == null ?
                            <Image
                                style={styles.image}
                                source={ defaultImage }
                            />
                        :
                            <Image
                                style={styles.image}
                                source={ user.image }
                            />
                    }
                </View>
                <View>
                    <Text style={styles.title}>Mes informations personnelles</Text>
                    <View>
                        <Text style={styles.label}>Prénom</Text>
                        <TextInput
                            style={styles.input}
                            value={user.firstname}
                            placeholder="Prénom"
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Nom</Text>
                        <TextInput
                            style={styles.input}
                            value={user.lastname}
                            placeholder="Nom"
                            />
                    </View>
                    <View>
                        <Text style={styles.label}>Date de naissance</Text>
                        <TextInput
                            style={styles.input}
                            value={user.birthday}
                            placeholder="Date de naissance"
                            />
                    </View>
                    <View>
                        <Text style={styles.label}>Numéro de téléphone</Text>
                        <TextInput
                            style={styles.input}
                            value={user.phone}
                            placeholder="Numéro de téléphone"
                            keyboardType="numeric"
                            />
                    </View>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Modifier mes informations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Déconnexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Modifier le mot de passe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.link}
                    >
                        <Text style={styles.linkDanger}>Supprimer mon compte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    imageContainer: {
        width: windowWidth * .35,
        height: windowWidth * .35,
        borderColor: '#000',
        borderRadius: 90,
        borderWidth: 1,
        marginBottom: 5,
    },
    image: {
        flex: 1,
        borderRadius: 90,
        width: undefined,
        height: undefined,
    },
    label: {
        marginBottom: 5,
    },
    input: {
        height: 35,
        marginBottom: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttons: {
        marginTop: 20,
    },
    btn: {
        width: windowWidth * .7,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 10,
    },
    btnText: {
        padding: 15,
        textAlign: 'center',
    },
    link: {
        marginTop: 10,
    },
    linkDanger: {
        color: '#f00',
        textDecorationLine: 'underline',
        textAlign: 'center',
    }
});