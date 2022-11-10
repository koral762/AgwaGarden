import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { setCategoriesFromApi, setAvailablePlantsFromApi } from '../store/orderPlantsReducer';
import { useDispatch } from 'react-redux';

export const SetDataToState = () => {
    const [isLoading, setLoading] = useState(true);
    const [dataCategories, setDataCategories] = useState();
    const [dataPlants, setDataPlants] = useState();

    const dispatch = useDispatch();
    const urlCategory = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json'
    const urlPlants = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json'


    const getCategories = async () => {
        try {
            const response = await fetch(urlCategory, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setDataCategories(json.categories);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const getPlants = async () => {
        try {
            const response = await fetch(urlPlants, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setDataPlants(json.plants);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPlants();
        getCategories();
    }, []);

    if (dataCategories) dispatch(setCategoriesFromApi(dataCategories));

    if (dataPlants) dispatch(setAvailablePlantsFromApi(dataPlants));

    return (
        <View></View>
    );
};