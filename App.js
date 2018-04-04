import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import List from './components/List'
import AddDeck from './components/AddDeck'
import { TabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1de25f',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  test: {
    flex: 1,
  }
});

const Tabs = TabNavigator({
  Decks: {
    screen: List,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#292477' : '#fff',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? '#fff' : '#292477',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   reducer
// )
// composeEnhancers(applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Tabs/>
          </View>
        </View>
      </Provider>
    );
  }
}
