// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text, FlatList } from 'react-native';
// import PlantsCirclePreview from '../comps/PlantsCirclePreview';
// import { useDimensions } from '@react-native-community/hooks';


// function GetCategories() {
    
//     const PrevieWidth = useDimensions().screen.width;
//     const [isLoading, setLoading] = useState(true);
//     const [categories, setCategories] = useState([]);
//     const selectedCategoryId ='vines';


//     const url = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json'

//     const getCategories = async () => {
//         try {
//             const response = await fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 }
//             });
//             const json = await response.json();
//             setCategories(json.categories);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         getCategories();
//         console.log('dog');
//     }, []);

//     return (
//         <View style={styles.categoryPlants}>
//             <FlatList
//                 showsVerticalScrollIndicator={false}
//                 horizontal={true}
//                 data={categories.filter(category => category.id === selectedCategoryId).plants}
//                 renderItem={({ item }) => (
//                     <PlantsCirclePreview PrevieWidth={PrevieWidth / 6} margin={10} plant={item} isSelected={false} />
//                 )} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({

//     categoryPlants: {
//         height: '55%',
//         width: '100%',
//         flexDirection: 'row',
//         paddingLeft: 9
//     },
//     dropdown2DropdownStyle: {
//         backgroundColor: 'rgba(255,255,255,0)',
//         borderBottomLeftRadius: 12,
//         borderBottomRightRadius: 12,
//         width: '50%',
//     },
//     dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
//     dropdown2RowTxtStyle: {
//         color: '#FFF',
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },
//     dropdown2BtnTxtStyle: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//     }

// })

// export default GetCategories;