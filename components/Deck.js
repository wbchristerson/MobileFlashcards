import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  state = {
    opacity: new Animated.Value(0)
  }
  /* The information related to animation provided in the following
   * function is heavily based on the React video about Animations in
   * the React Native course, Lesson 5, Native Features */
  componentDidMount() {
    const { opacity } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1200 })
      .start()
  }
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.item
    return {
      title: strId
    }
  }
  render() {
    const { opacity } = this.state
    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.textStyleBig}>{this.props.deck.title}</Text>
        <Text style={styles.textStyle}>{this.props.deck.questions.length} cards</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'NewCard',
          { entryId: this.props.navigation.state.params.entryId })}>
          <Text style={[styles.textStyle, styles.border, styles.colorBlue]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Quiz',
          { entryId: this.props.navigation.state.params.entryId })}>
          <Text style={[styles.textStyle, styles.border, styles.colorRed]}>Quiz</Text>
        </TouchableOpacity>
      </Animated.View>
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
  textStyle: {
    fontSize: 20
  },
  textStyleBig: {
    fontSize: 30
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000205',
    padding: 8,
    fontSize: 20,
  },
  colorBlue: {
    backgroundColor: '#51CAEF',
  },
  colorRed: {
    backgroundColor: 'red',
  }
})

function mapStateToProps(state, { navigation }) {
  const { entryId } = navigation.state.params

  return {
    entryId,
    deck: state.decks[entryId.item]
  }
}

export default connect(mapStateToProps)(Deck)
