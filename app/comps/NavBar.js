import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NavBar(props) {
    return (
        <View style={styles.navbar}>
            <Text style={{textAlign: 'center'}}>ORDERS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        width: '100%',
        backgroundColor: "rgba(254,253,255,1)",
        justifyContent: 'center',
    }
})

export default NavBar;