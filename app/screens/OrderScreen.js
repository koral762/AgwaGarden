import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AvailablePlants from '../comps/AvailablePlants';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';
import { addToSelectedPlants,addOrRemoveSelectedPlant, getAvailablePlants } from '../store/orderPlantsReducer';

function OrderScreen(props) {

    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    var currentUserLastOrder = useSelector(store => store.usersReducer.currentUser.ordersHistory);
    const plants = useSelector(store => store.orderPlantsReducer.availablePlants);

    useEffect(() => {

        if (currentUserLastOrder.length !== 0 && plants.length !== 0) {

            currentUserLastOrder = currentUserLastOrder[currentUserLastOrder.length - 1];

            for (var x = 0; x < 5; x++) {
                dispatch(addOrRemoveSelectedPlant(currentUserLastOrder.plants[x]))
            }

        }

    }, [])

    return (
        <View style={styles.background}>
            <NavBar />
            {plants.length !== 0 &&
                <View style={{ flex: 1 }}>
                    <YourNextOrder />
                    <AvailablePlants />
                </View>}
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