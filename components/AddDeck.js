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
    title: ''
  }

  handlePress = () => {
    alert('Hello!')
  }

  submit = () => {
    let newTitle = this.state.title
    this.setState({
      title: ''
    })
    saveDeckTitle(newTitle)
  }

  handleTextChange = ({newInput}) => {
    this.setState({
      title: newInput
    })
  }

  // <Text style={styles.btnText}>Submit</Text>
  // <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
  render() {
    let x = this.state.title
    // let x = this.state.title
    // console.log(x)
    return(
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <Text>Echo!</Text>
        <TextInput value={this.state.input} onChange={this.handleTextChange}/>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
        <Text>{x}</Text>
      </KeyboardAvoidingView>
    )
  }
}
