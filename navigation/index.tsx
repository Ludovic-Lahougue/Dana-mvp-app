/**
* If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
* https://reactnavigation.org/docs/getting-started
*
*/
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, TextInput, StyleSheet } from 'react-native';
import { View } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketsScreen from '../screens/TicketsScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
        </NavigationContainer>
    );
}
    
function LogoTitle() {
    return (
        <View style={styles.header}>
            <Image
            style={styles.image}
            source={require('../assets/images/Dana.png')}
            />
            <View style={styles.searchBox}>
                <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                />
                <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
            </View>
        </View>
    );
}

/**
* A root stack navigator is often used for displaying modals on top of all other content.
* https://reactnavigation.org/docs/modal
*/
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
        </Stack.Navigator>
        );
    }
    
/**
* A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
* https://reactnavigation.org/docs/bottom-tab-navigator
*/
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    
    return (
        <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTitle: (props) => <LogoTitle {...props} />,
            tabBarActiveTintColor: Colors[colorScheme].tint,
        }}>
        <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            title: 'Accueil',
            tabBarActiveTintColor: '#331863',
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        />
        <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
            title: 'Recherche',
            tabBarActiveTintColor: '#331863',
            tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />,
        }}
        />
        <BottomTab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
            title: 'Billets',
            tabBarActiveTintColor: '#331863',
            tabBarIcon: () => <Entypo name="ticket" size={24} color="black" />,
        }}
        />
        <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title: 'Profil',
            tabBarActiveTintColor: '#331863',
            tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
        />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '35%',
        resizeMode: 'contain'
    },
    input: {
        paddingLeft: 5,
        paddingRight: 25,
    },
    searchBox: {
        marginTop: 10,
        paddingHorizontal: 5,
        position: 'relative',
        width: '60%',
        borderWidth: 1,
        borderRadius: 20,
    },
    searchIcon: {
        position: 'absolute',
        top: '10%',
        right: '3%',
    }
});