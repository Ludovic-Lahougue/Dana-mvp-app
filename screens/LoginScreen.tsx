import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Login from '../components/Login';
import Signup from '../components/SignUp';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}: RootTabScreenProps<'Login'>) {
    const [tab, setTab] = useState('login');

    return (
        <ScrollView>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, tab === 'login' && styles.tabActive]}
                    onPress={() => setTab('login')}
                >
                    <Text style={[styles.tabText, tab === 'login' && styles.tabTextActive]}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, tab === 'signUp' && styles.tabActive]}
                    onPress={() => setTab('signUp')}
                >
                    <Text style={[styles.tabText, tab === 'signUp' && styles.tabTextActive]}>Inscription</Text>
                </TouchableOpacity>
            </View>
            {
                tab === 'login' ?
                    <Login />
                :
                    <Signup />
            }
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
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1,
    },
    tab: {
        width: windowWidth * .5,
        zIndex: 10,
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