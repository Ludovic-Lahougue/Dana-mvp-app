import { useContext } from 'react';
import { Text, View } from "./Themed";
import { TextInput, StyleSheet, Dimensions, TouchableOpacity, Pressable } from "react-native";
import { idUserContext } from '../context/Context';
import { RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function Login() {
    // @ts-ignore
    const [idUser, setIdUser] = useContext(idUserContext);
    
    const navigation = useNavigation();

    const login = () => {
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
                    <Text style={styles.label}>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        />
                    <Pressable
                        style={styles.forgotPassword}
                        onPress={() => console.log('Mot de passe oublié')}
                        >
                        <Text style={styles.forgotPasswordText}>Mot de passe oublié</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={login}
                >
                    <Text style={styles.btnText}>Se connecter</Text>
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
    },
    forgotPassword: {
        alignSelf: 'flex-end',
    },
    forgotPasswordText: {
        color: '#6f6f6f',
        textDecorationLine: 'underline'
    }
});