import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


function SaveOrder(props) {

    const dispatch = useDispatch();
    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);

    function orderSaved(){
        console.log('its save');
    }

    return (
        <View style={(quantityLimit === 5)? styles.buttonContainer : styles.buttonContainerdisabled }>
            <TouchableOpacity style={styles.button} disabled={quantityLimit !== 5} onPress={()=>{orderSaved()}} ><Text style={{ fontWeight: 'bold' }}>SAVE CHANGES</Text></TouchableOpacity>
            {/* <View style={styles.order} */}
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(254,253,255,1)",
        
    },
    buttonContainerdisabled:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    button: {
        width: '80%',
        height: '30%',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(148,217,234,1)",
    }
})

export default SaveOrder;