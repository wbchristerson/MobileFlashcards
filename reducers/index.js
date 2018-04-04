import { RECEIVE_DECKS, ADD_DECK, ADD_DECK_TO_STORAGE } from '../actions'

function entries (state = {decks: {}}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case ADD_DECK:
      let tempDecks = state.decks
      tempDecks = {
        ...tempDecks,
        [action.deck]: {
          title: action.deck,
          questions: [],
        },
      }
      return {
        ...state,
        decks: tempDecks
      }
    case ADD_DECK_TO_STORAGE:
      return state
    default:
      return state
  }
}

export default entries
