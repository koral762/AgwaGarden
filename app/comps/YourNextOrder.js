import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getMonth from '../utils/getMonths';
import PlantsCirclePreview from './PlantsCirclePreview';
import { useDimensions } from '@react-native-community/hooks';

function YourNextOrder(props) {

    const [currentMonth, nextMonth] = getMonth();
    const PrevieWidth = useDimensions().screen.width;


    return (
        <View style={styles.orderContainer}>
            <View style={styles.orderScreenText}>
                <Text style={{ fontWeight: "bold", fontSize: 28 }}>Your next order</Text>
                <Text style={{ marginTop: '5%', fontSize: 22 }}>The monthly order consists of 5 plants.</Text>
                <Text style={{ fontSize: 20 }}>
                    Changes to your next order can be made until the end of {currentMonth}.
                    This order will be shipped on the beginning of {nextMonth}.
                </Text>
                <Text style={{ fontWeight: "bold", marginTop: '7%', fontSize: 20 }}>Your selected plants:</Text>
            </View>

            <View style={styles.selectedPlants}>
                <PlantsCirclePreview  PrevieWidth={PrevieWidth/6} margin={4} />
                <PlantsCirclePreview  PrevieWidth={PrevieWidth/6} margin={4} />
                <PlantsCirclePreview  PrevieWidth={PrevieWidth/6} margin={4} />
                <PlantsCirclePreview  PrevieWidth={PrevieWidth/6} margin={4} />
                <PlantsCirclePreview  PrevieWidth={PrevieWidth/6} margin={4} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    orderContainer: {
        height: '55%',
        width: '100%',
        backgroundColor: 'rgba(247,245,255,1)',
        justifyContent: 'space-between',
    },
    orderScreenText: {
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 40,

    },
    selectedPlants: {
        backgroundColor: 'blue',
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})

export default YourNextOrder;