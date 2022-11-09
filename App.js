import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
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
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <SetDataToState />
          <Stack.Navigator>
            <Stack.Screen
              name="'"
              component={OrderScreen}
            />
            <Stack.Screen name="HOME" component={HomeScreen} />
          </Stack.Navigator>

        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
