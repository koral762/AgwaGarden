import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform } from 'react-native';
import OrderScreen from './app/screens/OrderScreen';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <OrderScreen />
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
