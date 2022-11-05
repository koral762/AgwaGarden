import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PlantsCirclePreview from './PlantsCirclePreview';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector } from 'react-redux';

function AvailablePlants(props) {

    const PrevieWidth = useDimensions().screen.width;
    const availablePlants = useSelector(store => store.orderPlantsReducer.availablePlants);

    return (
        <View style={styles.AvailablePlantsContainer}>
            <View style={styles.categoryPlants}>
                <FlatList 
                keyExtractor={(item)=>item.id}
                horizontal={true}
                data={availablePlants} 
                renderItem={({item})=>(
                    <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} plant={item} isSelected={false} />
                )}/>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} disabled={true}><Text style={{ fontWeight: 'bold' }}>SAVE CHANGES</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    AvailablePlantsContainer: {
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

export default AvailablePlants;