import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { getDecksFromStorage } from '../actions'

// function DeckTitleBlock({title, cardCount}) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => this.props.navigation.navigate(
//         'Deck',
//         { entryId: title })}
//         style={{flex: 1, flexWrap: 'wrap'}}>
//         <Text style={{fontSize: 30}}>Title: {title}</Text>
//         <Text style={{fontSize: 30}}>Number Of Cards: {cardCount}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// <View style={{flex: 1, flexWrap: 'wrap'}}>
//   <Text style={{fontSize: 30}}>Title: {title}</Text>
//   <Text style={{fontSize: 30}}>Number Of Cards: {cardCount}</Text>
// </View>

class List extends Component {
  componentDidMount() {
    this.props.dispatch(getDecksFromStorage())
  }

  DeckTitleBlock({title, cardCount}) {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Deck',
          { entryId: title })}
          style={{flex: 1, flexWrap: 'wrap'}}>
          <Text style={{fontSize: 30}}>Title: {title}</Text>
          <Text style={{fontSize: 30}}>Number Of Cards: {cardCount}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  /*
  *  Collection of objects of the form:
  *   {
  *    name: 'Subject',
  *    count: 0
  *   }
  */
  // state = {
  //   deckNameList: []
  // }

  // componentDidMount() {
  //   this.dispatch(getDecksFromStorage())
  // }

  // renderItem = ({item}) => {
  //   return <DeckTitleBlock />
  // }

  render() {
    console.log("Decks: ", this.props.decks)
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
                <Text style={{fontSize: 30}}>Number Of Cards: {0}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
               // <this.DeckTitleBlock title={item} cardCount={0} />}
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
    decks: state.decks
  }
}

export default connect(mapStateToProps)(List)
