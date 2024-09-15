import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterFormWithImage from './app/components/RegisterFormWithImage';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterFormWithImage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
