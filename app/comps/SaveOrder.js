import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNewOrder } from '../store/orderPlantsReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';


function SaveOrder(props) {

    const dispatch = useDispatch();
    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);
    const currentUser = useSelector(store => store.usersReducer.currentUser);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function orderSaved() {
        dispatch(createNewOrder(currentUser));

        setModalIsOpen(true);
        setTimeout(() => {
            setModalIsOpen(false);
        }, 2000);

    }

    return (
        <View>
            {modalIsOpen && <Modal style={styles.orderSavedConfirmation}>
                <View style={styles.confirmationTextContainer}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdIRwDn1RQRGTNfIW1RhcgoN5kMaT5WJkmONB_upI4BOCkAdDSxbxGxim6T1gj6ekCes&usqp=CAU',
                        }} style={{ width: 60, height: 60 }}></Image>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Awesome!</Text>
                    <Text style={{ fontSize: 20 }}>Your order is complete!</Text>
                </View>
            </Modal>}

            <View style={(quantityLimit === 5) ? styles.buttonContainer : styles.buttonContainerdisabled}>
                <TouchableOpacity style={styles.button} disabled={quantityLimit !== 5} onPress={() => { orderSaved() }} >
                    <Text style={{ fontWeight: 'bold', height: 30 }}>SAVE CHANGES</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    orderSavedConfirmation: {
        justifyContent: "center",
        alignItems: "center"
    },
    confirmationTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    buttonContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,

    },
    buttonContainerdisabled: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        opacity: 0.5,
    },
    button: {
        width: '80%',
        height: '80%',
        borderRadius: 8,
        padding: 10,
        paddingTop: 20,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(148,217,234,1)"
    },

})

export default SaveOrder;