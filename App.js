import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/AddDeck'

export default class App extends React.Component {
  // <Text>Open up App.js to start working on your app!</Text>
  // <Text>Changes you make will automatically reload.</Text>
  // <Text>Shake your phone to open the developer menu.</Text>
  render() {
    return (
      <View style={styles.container}>
        <AddDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
