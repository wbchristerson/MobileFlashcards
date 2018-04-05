import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.item
    return {
      title: strId
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length} cards</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'NewCard',
          { entryId: this.props.navigation.state.params.entryId })}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Quiz',
          { entryId: this.props.navigation.state.params.entryId })}>
          <Text>Quiz</Text>
        </TouchableOpacity>
        {this.props.deck.questions.map((q,i) => {
          return (
            <View key={q.question + i.toString()}>
              <Text>Question: {q.question}</Text>
              <Text>Answer: {q.answer}</Text>
            </View>
          )
        })}
      </View>
    )
  }
  // <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1de25f',
    padding: 15,
  },
})

function mapStateToProps(state, { navigation }) {
  const { entryId } = navigation.state.params

  return {
    entryId,
    deck: state.decks[entryId.item]
  }
}

export default connect(mapStateToProps)(Deck)
