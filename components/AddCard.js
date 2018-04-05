import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { addDeck, addDeckToStorage, addCardToDeckLocally, addCardToStorage } from '../actions'


class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: '',
  }

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.item
    return {
      title: `Add Card To '${strId}'`
    }
  }

  handleQuestionChange = (newInput) => {
    this.setState({
      questionInput: newInput
    })
  }

  handleAnswerChange = (newInput) => {
    this.setState({
      answerInput: newInput
    })
  }

  submit = () => {
    let newQuestion = this.state.questionInput
    let newAnswer = this.state.answerInput
    this.props.dispatch(addCardToDeckLocally(this.props.deck.title, newQuestion, newAnswer))
    this.props.dispatch(addCardToStorage(this.props.deck.title, newQuestion, newAnswer))
    this.setState({
      questionInput: '',
      answerInput: '',
    })
  }

  render() {
    let questionInput = this.state.questionInput
    let answerInput = this.state.answerInput
    return(
      <KeyboardAvoidingView behavior='padding'>
        <Text>Leprechaun</Text>
        <TextInput value={questionInput} placeholder='Question' placeholderTextColor='#75a38e' onChangeText={this.handleQuestionChange}/>
        <TextInput value={answerInput} placeholder='Answer' placeholderTextColor='#75a38e' onChangeText={this.handleAnswerChange}/>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    deck: state.decks[entryId.item],
  }
}

export default connect(mapStateToProps)(AddCard)
