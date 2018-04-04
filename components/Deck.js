import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length} cards</Text>
      </View>
    )
  }
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
