import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NavBar({ title, navigation }) {

    return (
        <View style={styles.navbar}>

            <Text style={styles.xStyle} onPress={() =>
                navigation.navigation.navigate('Home')}>x</Text>
            <Text style={{ textAlign: 'center' }}>{title}</Text>
            
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
        fontSize: 40,
        top: 0,
        right: 0,
        paddingTop: 10,
        paddingRight: 10
    }
})

export default NavBar;