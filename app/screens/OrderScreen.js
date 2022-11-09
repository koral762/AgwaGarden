import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AvailablePlants from '../comps/AvailablePlants';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';
import { addToSelectedPlants, addOrRemoveSelectedPlant, getAvailablePlants } from '../store/orderPlantsReducer';

function OrderScreen(navigation) {

    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const plants = useSelector(store => store.orderPlantsReducer.availablePlants);

    return (
        <View style={styles.background}>
            <NavBar title={'ORDER'} />
            {plants.length !== 0 &&
                <View style={{ flex: 1 }}>
                    <YourNextOrder />
                    <AvailablePlants navigation={navigation} />
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(247,245,255,1)'

    }
})

export default OrderScreen;