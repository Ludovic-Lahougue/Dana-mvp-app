import { AntDesign, FontAwesome, Entypo, Ionicons  } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Image, TextInput, StyleSheet } from 'react-native';
import { View } from '../../components/Themed';

import Colors from '../../constants/Colors';

function LogoTitle() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Dana.png')}
      />
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Accueil',
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Recherche',
          tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: 'Billets',
          tabBarIcon: () => <Entypo name="ticket" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
    </Tabs>
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
    width: '30%',
    resizeMode: 'contain'
  },
  input: {
    width: '60%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
    marginTop: 10,
  },
});