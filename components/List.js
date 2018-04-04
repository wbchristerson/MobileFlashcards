import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

function DeckTitleBlock() {
  return (
    <View>
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <Text style={{fontSize: 30}}>Title: Fire</Text>
        <Text style={{fontSize: 30}}>Number Of Cards: 0</Text>
      </View>
    </View>
  )
}

class List extends Component {
  /*
  *  Collection of objects of the form:
  *   {
  *    name: 'Subject',
  *    count: 0
  *   }
  */
  state = {
    deckNameList: []
  }

  componentDidMount() {
    getDecks()
    .then((results) => {
      let decks = JSON.parse(results)
      let akeys = [];
      for (var key in decks) {
        akeys.push({name: key, count: 0});
      }
      this.setState({
        deckNameList: akeys
      })
    })
  }

  // renderItem = ({item}) => {
  //   return <DeckTitleBlock />
  // }

  render() {
    return (
      <View style={{flex: 1,}}>
        <FlatList
          data={this.state.deckNameList}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }

  // data={[{key: 'a'}, {key: 'b'}]}

  // data={this.state.deckNameList.length === 0 ? [{name: "Internet Stuff", count: 0}] : this.state.deckNameList}
  // renderItem={({item}) => this.renderItem(item)}

  // <Text style={{fontSize: 50,}}>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
  // <Text>Hello</Text>
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps)(List)
