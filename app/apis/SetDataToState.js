import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { setCategoriesFromApi } from '../store/orderPlantsReducer';
import { useDispatch } from 'react-redux';



export const SetDataToState = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    const dispatch = useDispatch();
    const url = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json'


    const getCategories = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setData(json.categories);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    if (data) {
        console.log('jjjjjjj');
        dispatch(setCategoriesFromApi(data));
    }


    return (
        <View >
        </View>
    );
};