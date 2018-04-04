import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import List from './components/List'
import AddDeck from './components/AddDeck'
import { TabNavigator } from 'react-navigation'

// backgroundColor: '#fff',
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1de25f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 1,
  }
});

function Home () {
  return (
    <View style={styles.container}>
      <Text>Yogurt!</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  Decks: {
    screen: List,
  }
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

// const Tabs = TabNavigator({
//   NewDeck: {
//     screen: AddDeck,
//     navigationOptions: {
//       tabBarLabel: 'New Deck',
//     }
//   },
//   Decks: {
//     screen: List,
//     navigationOptions: {
//       tabBarLabel: 'Decks'
//     }
//   }
// },
// {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? '#292477' : '#fff',
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? '#fff' : '#292477',
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// })


export default class App extends React.Component {
  // <Text>Open up App.js to start working on your app!</Text>
  // <Text>Changes you make will automatically reload.</Text>
  // <Text>Shake your phone to open the developer menu.</Text>
  // <View style={{height: 20}} />
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: '#d8d51a'}}>Hello!</Text>
        <View style={{flexDirection: row}}>
        </View>
        <Tabs style={{backgroundColor: '#d819ab', width: 30, height: 30}}/>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
      </View>
    );
  }
}
