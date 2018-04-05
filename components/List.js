import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { getDecksFromStorage } from '../actions'
import { limeGreen, paleWhite } from '../utils/Colors'

class List extends Component {
  componentDidMount() {
    this.props.dispatch(getDecksFromStorage())
  }

  render() {
    let akeys = [];
    for (var key in (this.props.decks)) {
      akeys.push(key);
    }
    return (
      <View style={{flex: 1,}}>
        <FlatList
          data={this.props.decks ? Object.keys(this.props.decks) : []}
          renderItem={({item}) => (
            <View style={styles.deckStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'SingleDeck',
                { entryId: {item} })}
                style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.cardText}>{item}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.cardText}>{this.props.decks[item].questions.length} {this.props.decks[item].questions.length === 1 ? 'card' : 'cards'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
  },
  deckStyle: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: paleWhite,
    padding: 15,
  },
  cardText: {
    fontSize: 25,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  }
})

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(List)
