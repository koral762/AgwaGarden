import React from 'react';
import { View , StyleSheet} from 'react-native';
import AvailablePlants from '../comps/AvailablePlants';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';


function OrderScreen(props) {
    return (
        <View style={styles.background}>
            <NavBar/>
            <YourNextOrder/>
            <AvailablePlants/>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "pink"
    }
})

export default OrderScreen;