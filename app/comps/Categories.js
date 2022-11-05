import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import PlantsCirclePreview from './PlantsCirclePreview';
import { useDimensions } from '@react-native-community/hooks';

function Categories(props) {

    const PrevieWidth = useDimensions().screen.width;

    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.categoryPlants}>
                <ScrollView horizontal={true}>
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} />


                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} disabled={true}><Text style={{ fontWeight: 'bold' }}>SAVE CHANGES</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    categoriesContainer: {
        flex: 1,
        backgroundColor: 'rgba(239,234,253,1)',
        justifyContent: 'space-between'
    },
    categoryPlants: {

        height: '70%',
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 9


    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        backgroundColor: "rgba(254,253,255,1)",

    },
    button: {
        backgroundColor: 'blue',
        width: '80%',
        height: '30%',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(148,217,234,1)",


    }

})

export default Categories;