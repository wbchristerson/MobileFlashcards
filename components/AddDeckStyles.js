import { StyleSheet } from 'react-native'
import { limeGreen, offBlack } from '../utils/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  info: {
    fontSize: 20,
  },
  inputOption: {
    flexDirection: 'row',
    width: 300,
    fontSize: 20,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
    fontSize: 20,
  }
})
