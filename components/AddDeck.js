import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { addDeck, addDeckToStorage } from '../actions'
import { limeGreen, offBlack, blueGray } from '../utils/Colors'


class AddDeck extends Component {
  state = {
    input: '',
  }

  submit = () => {
    let newTitle = this.state.input
    if(!newTitle) {
      alert("Please provide a title for the deck")
    } else {
      this.props.dispatch(addDeck(newTitle))
      this.props.dispatch(addDeckToStorage(newTitle))
      this.setState({
        input: ''
      })
      this.props.navigation.navigate(
        'SingleDeck',
        { entryId: {newTitle} }
      )
    }
  }

  handleTextChange = (newInput) => {
    this.setState({
      input: newInput
    })
  }

  render() {
    let input = this.state.input
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.info}>What is the title of your new deck?</Text>
        <TextInput style={styles.inputOption} value={input} onChangeText={this.handleTextChange} placeholder='Deck Title'
          placeholderTextColor={blueGray} />
        <TouchableOpacity onPress={this.submit}>
          <Text style={styles.border}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  info: {
    fontSize: 20,
  },
  inputOption: {
    flexDirection: 'row',
    width: 300,
    fontSize: 20,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
    fontSize: 20,
  }
})

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AddDeck)
