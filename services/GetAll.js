import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export const GetAll = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
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
        if (data) {
            data.filter(category => category.id === "vines")[0].plants.map(item => console.log('plant', item.name))
        }
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> :

                (
                    data.filter(category => category.id === "vines")[0].plants.map(item =>
                        <Text>
                            {item.name}
                        </Text>

                    )

                )}
        </View>
    );
};