import React from 'react';
import { View , StyleSheet} from 'react-native';
import NavBar from '../comps/NavBar';

function OrderScreen(props) {
    return (
        <View style={styles.background}>
            <NavBar/>
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