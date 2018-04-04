import { RECEIVE_DECKS } from '../actions'

function entries (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {}
    default:
      return state
  }
}

export default entries
