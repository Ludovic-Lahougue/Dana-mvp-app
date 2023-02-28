import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { categoryEvent } from '../types/Category';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function Cateogry({ category }: { category: categoryEvent }) {
    return (
        <View style={styles.structure}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={ category.image}
                />
                <Text style={styles.category}>{category.name}</Text>
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    structure: {
        width: windowWidth * .35,
    },
    imageContainer: {
        width: '100%',
        height: windowWidth * .35,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',
    },
    category: {
        position: 'absolute',
        top: '10%',
        backgroundColor: '#00000088',
        color: '#fff',
        fontWeight: 'bold',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: 3
    },
    image: {
        flex: 1,
        borderRadius: 9,
        width: undefined,
        height: undefined,
    },
});
