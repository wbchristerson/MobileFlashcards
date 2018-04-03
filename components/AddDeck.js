import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { saveDeckTitle } from '../utils/DeckAPI'

// function SubmitBtn ({ onPress }) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}>
//         <Text>SUBMIT</Text>
//     </TouchableOpacity>
//   )
// }

export default class AddDeck extends Component {
  state = {
    input: 'w',
  }

  handlePress = () => {
    alert('Hello!')
  }

  submit = () => {
    let newTitle = this.state.title
    this.setState(() => ({
      input: ''
    }))
    saveDeckTitle(newTitle)
  }

  handleTextChange = (input) => {
    this.setState({
      input: input
    })
    // this.setState(() => ({
    //   input
    // }))
  }

  // <Text style={styles.btnText}>Submit</Text>
  // <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
  render() {
    let { input } = this.state
    return(
      <KeyboardAvoidingView behavior='padding'>
        <Text>Year: {input}</Text>
        <Text>What is the title of your new deck?</Text>
        <TextInput value={input} onChangeText={this.handleTextChange}/>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
        <Text>Title: {input}</Text>
      </KeyboardAvoidingView>
    )
  }
}
