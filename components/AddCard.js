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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput style={styles.widthEntry} value={questionInput} placeholder='Question'
          placeholderTextColor='#75a38e' onChangeText={this.handleQuestionChange}/>
        <TextInput style={styles.widthEntry} value={answerInput} placeholder='Answer'
          placeholderTextColor='#75a38e' onChangeText={this.handleAnswerChange}/>
        <TouchableOpacity style={styles.border} onPress={this.submit}>
          <Text style={styles.submissionText}>SUBMIT</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  widthEntry: {
    width: 300,
    fontSize: 20,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000205',
    padding: 8,
    backgroundColor: '#D9EA1E',
  },
  submissionText: {
    fontSize: 20,
  },
})

function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    deck: state.decks[entryId.item],
  }
}

export default connect(mapStateToProps)(AddCard)
