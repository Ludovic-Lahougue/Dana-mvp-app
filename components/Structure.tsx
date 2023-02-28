import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';

import { StructureType } from '../types/Structure';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function Structure({ structure }: { structure: StructureType }) {
    return (
        <View style={styles.structure}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={ structure.image}
                    resizeMode="cover"
                />
                <Text style={styles.category}>{structure.category.name}</Text>
            </View>
            <View style={styles.infos}>
                <Text style={styles.title}>{structure.name}</Text>
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    structure: {
        width: windowWidth * .35,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: windowWidth * .35,
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
    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
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
    }
});
