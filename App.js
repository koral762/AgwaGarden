import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import { SetDataToState } from './app/apis/SetDataToState';
import { NavigationContainer } from '@react-navigation/native';
import OrderScreen from './app/screens/OrderScreen';
import HomeScreen from './app/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <SetDataToState />
          
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Order">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Order" component={OrderScreen} />
            </Stack.Navigator>
          </NavigationContainer>

        </Provider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
