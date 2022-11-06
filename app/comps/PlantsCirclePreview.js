import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { addOrRemoveSelectedPlant } from '../store/orderPlantsReducer';
import { useDispatch, useSelector } from 'react-redux';


function PlantsCirclePreview(props) {

    const { PrevieWidth, margin, plant, isSelected } = props;
    const dispatch = useDispatch();

    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);

    function pressOnPlant(id, isSelected) {
        dispatch(addOrRemoveSelectedPlant({ id, isSelected }));
    }

    return (
        <View style={{
            width: PrevieWidth,
            height: '80%',
            margin: margin,
            justifyContent: 'start',
            alignItems: 'center'
        }}>
            <TouchableOpacity style={styles.circlePreview} disabled={quantityLimit === 5 && !isSelected} key={plant.id} onPress={() => { pressOnPlant(plant.id, isSelected) }}></TouchableOpacity >
            {isSelected && <View style={styles.addOrRemove}><Text style={{textAlign: 'center',color: 'white'}}>-</Text></View>}
            {quantityLimit !== 5 && !isSelected && <View style={styles.addOrRemove}><Text style={{textAlign: 'center',color: 'white'}}>+</Text></View>}
            <Text style={{ textAlign: 'center' }}>{plant.name.split('-')[0]}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    previewContainer: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',

    },
    circlePreview: {
        backgroundColor: 'pink',
        width: 65,
        height: 65,
        borderRadius: '100%',
        marginBottom: '6%',
    },
    addOrRemove: {
        width: 20,
        height: 20,
        backgroundColor: 'rgba(180,163,235,1)',
        position: 'absolute',
        top: 45,
        right: 0,
        borderRadius: '100%',
    }
})

export default PlantsCirclePreview;