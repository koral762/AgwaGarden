import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import OrderScreen from './app/screens/OrderScreen';
import { store } from './app/store/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <OrderScreen />
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
