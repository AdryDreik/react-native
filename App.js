import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login/login';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOla desde el pryecto principal</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export default App;
