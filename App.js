import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import List from './components/List'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DE25F',
    alignItems: 'center',
  },
  test: {
    flex: 1,
  }
});

/* Coloring options borrowed from React Native course */

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
    activeTintColor: Platform.OS === 'ios' ? '#292477' : '#FFF',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#292477',
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#74e0db',
      }
    }
  },
  NewCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <MainNavigator />
          </View>
        </View>
      </Provider>
    );
  }
}
