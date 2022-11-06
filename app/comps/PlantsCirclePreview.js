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
            {isSelected && <Text style={styles.addOrRemove}>-</Text>}
            {quantityLimit !== 5 && !isSelected && <Text style={styles.addOrRemove}>+</Text>}
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
        backgroundColor: 'green',
        position: 'absolute',
        top: 45,
        right: 0,
        borderRadius: '100%',
        textAlign: 'center',
        color: 'white'
    }
})

export default PlantsCirclePreview;