import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'

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
    title: '',
    input: ''
  }

  handlePress = () => {
    alert('Hello!')
  }

  submit = () => {
    let title = this.state.title
    this.setState({
      title: ''
    })
  }

  handleTextChange = (newInput) => {
    this.setState({
      input: newInput
    })
  }

  // <Text style={styles.btnText}>Submit</Text>
  // <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
  render() {
    return(
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <Text>Echo!</Text>
        <TextInput value={this.state.input} onChange={this.handleTextChange}/>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
        <Text>State: {this.state.title}</Text>
      </KeyboardAvoidingView>
    )
  }
}
