import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform } from 'react-native';
import OrderScreen from './app/screens/OrderScreen';
import { store } from './app/store/store';
import { Provider } from 'react-redux';


export default function App() {

  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <OrderScreen />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
