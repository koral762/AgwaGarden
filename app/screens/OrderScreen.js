import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AvailablePlants from '../comps/AvailablePlants';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';
import { addToSelectedPlants, getAvailablePlants } from '../store/orderPlantsReducer';
import { GetAll } from '../../services/GetAll';


function OrderScreen(props) {

    const dispatch = useDispatch();

    var currentUserLastOrder = useSelector(store => store.usersReducer.currentUser.ordersHistory);

    if (currentUserLastOrder.length !== 0) {

        currentUserLastOrder = currentUserLastOrder[currentUserLastOrder.length - 1];

        for (var x = 0; x < 5; x++) {
            dispatch(addToSelectedPlants(currentUserLastOrder.plants[x]))
        }

    }

    return (
        <View style={styles.background}>
            <NavBar />
            <GetAll/>
            <YourNextOrder />
            <AvailablePlants />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "pink"
    }
})

export default OrderScreen;