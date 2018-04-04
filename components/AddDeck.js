import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { addDeck, addDeckToStorage } from '../actions'


class AddDeck extends Component {
  state = {
    input: '',
  }

  submit = () => {
    let newTitle = this.state.input
    this.props.dispatch(addDeck(newTitle))
    this.props.dispatch(addDeckToStorage(newTitle))
    this.setState({
      input: ''
    })
  }

  handleTextChange = (newInput) => {
    this.setState({
      input: newInput
    })
  }

  render() {
    let input = this.state.input
    let akeys = [];
    for (var key in (this.props.decks)) {
      akeys.push(key);
    }
    return(
      <KeyboardAvoidingView behavior='padding'>
        <View>
          <Text>Keys: {akeys.length}</Text>
          {akeys.map((attr) => {
            return (
              <Text key={attr}>{attr}</Text>
            )
          })}
        </View>
        <Text>Title: {input}</Text>
        <Text>What is the title of your new deck?</Text>
        <TextInput value={input} onChangeText={this.handleTextChange} placeholder='Deck Title' />
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AddDeck)
