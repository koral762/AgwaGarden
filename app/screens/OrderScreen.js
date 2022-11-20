import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AvailablePlants from '../comps/AvailablePlants';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';

function OrderScreen(navigation) {

    const plants = useSelector(store => store.orderPlantsReducer.availablePlants);

    return (
        <View style={styles.background}>
            <NavBar title={'ORDER'} navigation={navigation}/>
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