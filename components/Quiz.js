import React, { Component } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    currentCard: 0,
    covered: true,
    correct: 0,
    incorrect: 0,
  }

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.item
    return {
      title: `Quiz On '${strId}'`
    }
  }

  getAnswer = () => {
    this.setState({
      covered: false,
    })
  }

  markCorrect = () => {
    this.setState((prevState) => ({
      covered: true,
      currentCard: prevState.currentCard + 1,
      correct: prevState.correct + 1,
    }))
  }

  markIncorrect = () => {
    this.setState((prevState) => ({
      covered: true,
      currentCard: prevState.currentCard + 1,
      incorrect: prevState.incorrect + 1,
    }))
  }

  reset = () => {
    this.setState({
      covered: true,
      currentCard: 0,
      correct: 0,
      incorrect: 0,
    })
  }

  goBackToDeck = () => {
    this.props.goBack()
    // console.log("hello")
  }

  render() {
    let cards = this.props.deck.questions
    return (
      <View>
        <Text>
          Cards Remaining: {cards.length - this.state.currentCard}
        </Text>
        {this.state.currentCard < cards.length ?
          (
            <View>
              <Text>
                {cards[this.state.currentCard].question}
              </Text>
              <TouchableOpacity onPress={this.getAnswer}>
                <Text>
                  {this.state.covered ? 'Show Answer' : cards[this.state.currentCard].answer}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.markCorrect}>
                <Text>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.markIncorrect}>
                <Text>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>
                You scored {this.state.correct} out of {cards.length}!
              </Text>
              <TouchableOpacity onPress={this.reset}>
                <Text>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goBackToDeck}>
                <Text>Go Back To Deck</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    )
  }
}


function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    deck: state.decks[entryId.item],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    goBack: () => navigation.goBack(),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
