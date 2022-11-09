import React from 'react';
import { StyleSheet,View } from 'react-native';
import NavBar from '../comps/NavBar';

function HomeScreen({navigation}) {

    return (
        <View style={styles.background}>
            <NavBar title={'HOME'} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default HomeScreen;