import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'


export default class AddDeck extends Component {
  state = {
    input: '',
    decks: {},
  }

  componentDidMount() {
    getDecks()
    .then((results) => {
      this.setState({
        decks: JSON.parse(results)
      })
    })
  }

  submit = () => {
    let newTitle = this.state.input
    saveDeckTitle(newTitle)
    this.setState((prevState) => ({
      input: '',
      decks: {
        ...prevState.decks,
        [newTitle]: {}
      }
    }))
  }

  handleTextChange = (newInput) => {
    this.setState({
      input: newInput
    })
  }

  render() {
    let input = this.state.input
    let akeys = [];
    for (var key in (this.state.decks)) {
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
        <TextInput value={input} onChangeText={this.handleTextChange}/>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
