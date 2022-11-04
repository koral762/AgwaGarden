import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NavBar(props) {

    return (
        <View style={styles.navbar}>
            <Text style={{ textAlign: 'center' }}>ORDER</Text>
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
    }
})

export default NavBar;