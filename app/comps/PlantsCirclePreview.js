import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function PlantsCirclePreview(props) {

    return (
        <View style={{
            width: props.PrevieWidth,
            height: '80%',
            margin: props.margin,
            justifyContent: 'start',
            alignItems: 'center',
        }}>
            <View style={styles.circlePreview}></View>
            <Text>koko</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    previewContainer: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        
    },
    circlePreview: {
        backgroundColor: 'pink',
        width: 65,
        height: 65,
        borderRadius: '100%',
        marginBottom: '6%',
    }
})

export default PlantsCirclePreview;