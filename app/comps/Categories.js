import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Categories(props) {
    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.categoryPlants}></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} disabled={true}><Text>SAVE CHANGES</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    categoriesContainer: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(239,234,253,1)'
    },
    categoryPlants: {
        height: '70%',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'yellow',
        backgroundColor: "rgba(254,253,255,1)",

    },
    button:{
        backgroundColor: 'blue',
        width: '80%',
        height: '55%',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(148,217,234,1)",

    }

})

export default Categories;