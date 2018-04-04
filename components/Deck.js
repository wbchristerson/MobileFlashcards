import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    // let strId = JSON.stringify(entryId)
    let strId = entryId.item

    // title: strId.slice(9,-1)
    return {
      title: strId
    }
  }
  render() {
    return (
      <View>
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
      </View>
    )
  }
}

export default Deck
