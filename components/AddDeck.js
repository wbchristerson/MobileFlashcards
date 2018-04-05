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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.info}>What is the title of your new deck?</Text>
        <TextInput style={styles.inputOption} value={input} onChangeText={this.handleTextChange} placeholder='Deck Title'
          placeholderTextColor='#3E5982' />
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
    backgroundColor: '#1DE25F',
    padding: 15,
    flexDirection: 'column',
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
    borderColor: '#000205',
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
