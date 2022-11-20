import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';


const SaveOrder = ({ navigation }) => {

    const quantityLimit = useSelector(store => store.orderPlantsReducer.quantityLimit);
    const selectedPlants = useSelector(store => store.orderPlantsReducer.selectedPlants);
    const currentUser = useSelector(store => store.usersReducer.currentUser);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function orderSaved() {

        navigation.navigation.navigate('Home');

        const user = currentUser;

        const order = {
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            plants: selectedPlants
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Credentials': 'false',
                'Access-Control-Allow-Headers': 'Origin ,OPTIONS ,X-Requested-With,Content-Type,Accept'

            },
            body: JSON.stringify(order)
        };

        const postOrder = async () => {
            try {
                await fetch(
                    'http://192.168.1.56:5000/send-data', requestOptions)
                    .then(response => {
                        response.json()
                            .then(data => {
                                Alert.alert("Post created");
                            })
                    })
            }
            catch (error) {
                console.error('im here', error);
            }
        }


        postOrder().then(data => {

            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 2000);

        })



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
                <TouchableOpacity style={styles.button} disabled={quantityLimit !== 5} onPress={() => {
                    orderSaved()
                }} >
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
        marginTop: 75,
    },
    buttonContainerdisabled: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
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