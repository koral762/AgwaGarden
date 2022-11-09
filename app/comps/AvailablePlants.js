import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import PlantsCirclePreview from './PlantsCirclePreview';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SaveOrder from './SaveOrder';

function AvailablePlants({navigation}) {


    const PrevieWidth = useDimensions().screen.width;

    const plants = useSelector(store => store.orderPlantsReducer.availablePlants);

    const plantsToView = plants.filter(item => !item.isSelected);


    const categories = useSelector(store => store.orderPlantsReducer.plantsCategories);
    var categoriesToView = categories.map(category => category.name);
    const [plantsInCategory, setPlantsInCategory] = useState([]);


    function CategorySelected(selectedItem, index) {
        setPlantsInCategory(categories[index].plants.map(plant => plant.id));

    }

    return (
        <View style={styles.AvailablePlantsContainer}>

            <SelectDropdown
                defaultButtonText={'Select category'}
                data={categoriesToView}
                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown2DropdownStyle}
                rowStyle={styles.dropdown2RowStyle}
                rowTextStyle={styles.dropdown2RowTxtStyle}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                onSelect={(selectedItem, index) => { CategorySelected(selectedItem, index) }} />

            <View style={styles.categoryPlants}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    data={(plantsInCategory.length) ? plantsToView.filter(item => plantsInCategory.includes(item.id)) : plantsToView}
                    renderItem={({ item }) => (
                        <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} plant={item} isSelected={item.isSelected} />
                    )} />
            </View>


            <View>
                <SaveOrder navigation={navigation} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    AvailablePlantsContainer: {
        flex: 0.7,
        backgroundColor: 'rgba(239,234,253,1)',
        justifyContent: 'space-between'
    },
    categoryPlants: {
        height: '55%',
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 9
    },
    dropdown2DropdownStyle: {
        backgroundColor: 'rgba(255,255,255,0)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        width: '50%',
    },
    dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    dropdown2BtnTxtStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
    },

    
})

export default AvailablePlants;