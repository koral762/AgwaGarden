import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function NavBar(props) {

    return (
        <View style={styles.navbar}>
            <Text style={{ textAlign: 'center' }}>ORDER</Text>
            <Text style={styles.xStyle}>x</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: '10%',
        width: '100%',
        backgroundColor: "rgba(254,253,255,1)",
        justifyContent: 'center',
        borderBottomColor: "rgba(235,230,250,1)",
        borderBottomWidth: 2
    },
    xStyle: {
        color: "rgba(126,230,122,1)",
        textAlign: "center",
        width: '10%',
        alignSelf: 'end',
        position: "absolute",
        fontSize:30,
        top:0,
        paddingTop: 10,
        paddingRight: 10
    }
})

export default NavBar;