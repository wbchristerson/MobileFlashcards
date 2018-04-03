import React, { Component } from 'react'
import { View, Text } from 'react-native'

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

  render() {
    return(
      <View>
        <Text>Echo!</Text>
      </View>
    )
  }
}
