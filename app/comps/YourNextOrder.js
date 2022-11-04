import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getMonth from '../utils/getMonths';

function YourNextOrder(props) {

    const [currentMonth, nextMonth] = getMonth();


    return (
        <View style={styles.orderContainer}>
            <View style={styles.orderScreenText}>
                <Text>Your next order</Text>
                <Text>The monthly order consists of 5 plants.</Text>
                <Text>
                    Changes to your next order can be made until the end of {currentMonth}.
                    This order will be shipped on the beginning of {nextMonth}.
                </Text>
                <Text>Your selected plants:</Text>
            </View>

            <View style={styles.selectedPlants}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        height: '50%',
        width: '100%',
        backgroundColor: 'rgba(247,245,255,1)',
        justifyContent: 'space-between'
    },
    orderScreenText: {
        padding: 20,
        paddingLeft: 30,

    },
    selectedPlants: {
        backgroundColor: 'blue',
        width: '100%',
        height: '30%',
    }
})

export default YourNextOrder;