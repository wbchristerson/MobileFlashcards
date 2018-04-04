import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { addDeck, addDeckToStorage } from '../actions'


class AddDeck extends Component {
  state = {
    input: '',
    // decks: {},
  }

  // componentDidMount() {
  //   getDecks()
  //   .then((results) => {
  //     this.setState({
  //       decks: JSON.parse(results)
  //     })
  //   })
  // }

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
    console.log("Hello")
    let akeys = [];
    console.log("A")
    for (var key in (this.props.decks)) {
      akeys.push(key);
    }
    console.log("B: ", akeys.length)
    return(
      <KeyboardAvoidingView behavior='padding'>
        <View>
          <Text>Keys: {akeys.length}</Text>
          {akeys.map((attr) => {
            console.log("Red: ", attr)
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

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AddDeck)
