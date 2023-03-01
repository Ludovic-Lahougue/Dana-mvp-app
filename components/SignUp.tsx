import { useContext } from 'react';
import { Text, View } from "./Themed";
import { TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";
import { idUserContext } from '../context/Context';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function Signup() {
    // @ts-ignore
    const [idUser, setIdUser] = useContext(idUserContext);

    const navigation = useNavigation();

    const signUp = () => {
        setIdUser(1);
        navigation.navigate('Root');
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Prénom</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Prénom"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nom</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date de naissance</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Date de naissance"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Répéter le mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        />
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={signUp}
                >
                    <Text style={styles.btnText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tab: {
        width: windowWidth * .5
    },
    tabActive: {
        borderBottomWidth: 2,
    },
    tabText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#7f7f7f',
        marginBottom: 5,
    },
    tabTextActive: {
        color: '#000',
    },
    inputContainer: {
        width: windowWidth * .8
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