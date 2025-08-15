import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import logo from './assets/icon_todo_list.png'
export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <image source={logo} style={styles.logo} />
      </View>
      <Text>Projeto 2B</Text>
      <StatusBar style="auto" />
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
  logo: {
    height: 120,
    width: 120,
  }
});
