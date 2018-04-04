import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { getDecksFromStorage } from '../actions'

class List extends Component {
  componentDidMount() {
    this.props.dispatch(getDecksFromStorage())
  }

  render() {
    let akeys = [];
    for (var key in (this.props.decks)) {
      akeys.push(key);
    }
    // data={this.props.decks ? akeys : []}
    return (
      <View style={{flex: 1,}}>
        <FlatList
          data={this.props.decks ? Object.keys(this.props.decks) : []}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'SingleDeck',
                { entryId: {item} })}
                style={{flex: 1, flexWrap: 'wrap'}}>
                <Text style={{fontSize: 30}}>Title: {item}</Text>
                <Text style={{fontSize: 30}}>Number Of Cards: {this.props.decks[item].questions.length}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(List)
