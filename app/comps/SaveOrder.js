import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


function SaveOrder(props) {

    const dispatch = useDispatch();
    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function orderSaved() {
        setModalIsOpen(true);
        setTimeout(() => {
            setModalIsOpen(false);
        }, 2000);
    }

    return (
        <View>

            <View style={(quantityLimit === 5) ? styles.buttonContainer : styles.buttonContainerdisabled}>
                <TouchableOpacity style={styles.button} disabled={quantityLimit !== 5} onPress={() => { orderSaved() }} ><Text style={{ fontWeight: 'bold' }}>SAVE CHANGES</Text></TouchableOpacity>
            </View>

            {modalIsOpen && <View style={styles.orderSavedConfirmation}>
                <View style={styles.confirmationTextContainer}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdIRwDn1RQRGTNfIW1RhcgoN5kMaT5WJkmONB_upI4BOCkAdDSxbxGxim6T1gj6ekCes&usqp=CAU',
                        }} style={{ width: 60, height: 60 }}></Image>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Awesome!</Text>
                    <Text style={{ fontSize: 20 }}>Your order is complete!</Text>
                </View>
            </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    orderSavedConfirmation: {
        position: "fixed",
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(104,225,131,0.7)",
        top: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    confirmationTextContainer: {
        width: '70%',
        height: '30%',
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    button: {
        flex: 1,
        width: '80%',
        height: '30%',
        borderRadius: 8,
        padding:10,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(148,217,234,1)",
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainerdisabled: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
  
})

export default SaveOrder;