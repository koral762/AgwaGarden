import React from 'react';
import { View , StyleSheet} from 'react-native';
import Categories from '../comps/Categories';
import NavBar from '../comps/NavBar';
import YourNextOrder from '../comps/YourNextOrder';


function OrderScreen(props) {
    return (
        <View style={styles.background}>
            <NavBar/>
            <YourNextOrder/>
            <Categories/>
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