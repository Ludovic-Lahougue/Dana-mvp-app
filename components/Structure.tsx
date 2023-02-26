import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { StructureType } from '../types/Structure';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

const windowWidth = Dimensions.get('window').width;

export default function Structure({ structure }: { structure: StructureType }) {
    return (
        <View>
            <View style={styles.image}></View>
            <View style={styles.infos}>
                <Text style={styles.title}>{structure.name}</Text>
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    image: {
        padding: windowWidth * .2,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
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
});
