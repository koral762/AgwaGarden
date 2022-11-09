import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { addOrRemoveSelectedPlant } from '../store/orderPlantsReducer';
import { useDispatch, useSelector } from 'react-redux';


function PlantsCirclePreview(props) {

    const { PrevieWidth, margin, plant, isSelected } = props;
    const dispatch = useDispatch();

    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);
    const orderIsFull = (quantityLimit === 5);

    const image = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plant.imageId}@3x.jpg`;

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
            {orderIsFull && !isSelected && <View style={styles.disableBackground} />}

            <TouchableOpacity style={styles.circlePreview} disabled={orderIsFull && !isSelected} key={plant.id} onPress={() => { pressOnPlant(plant.id, isSelected) }}>
                <Image source={{uri:image}} style={styles.image} />
            </TouchableOpacity >


            {isSelected && <View style={styles.addOrRemove}><Text style={{ textAlign: 'center', color: 'white' }}>-</Text></View>}
            {!orderIsFull && !isSelected && <View style={styles.addOrRemove}><Text style={{ textAlign: 'center', color: 'white' }}>+</Text></View>}
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
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: '100%',
    },
    disableBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(239,234,253,0.4)',
        position: 'absolute',
        zIndex: 1,
        top: 0
    }
})

export default PlantsCirclePreview;