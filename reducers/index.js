import { RECEIVE_DECKS, ADD_DECK, ADD_DECK_TO_STORAGE, ADD_CARD_TO_DECK } from '../actions'

function entries (state = {decks: {}}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case ADD_DECK:
      let tempDecks = state.decks
      tempDecks[action.deck] = { title : action.deck, questions: [] }
      // tempDecks = {
      //   [action.deck]: {
      //     title: action.deck,
      //     questions: [],
      //   },
      //   ...tempDecks,
      // }
      return {
        decks: tempDecks,
        ...state,
      }
    case ADD_DECK_TO_STORAGE:
      return state
    case ADD_CARD_TO_DECK:
      console.log("Action Title: ", action.deck)
      let oldQuestionSet = state.decks[action.deck].questions
      oldQuestionSet.push({ question: action.question, answer: action.answer })
      return {
        [action.deck]: {
          title: action.deck,
          questions: oldQuestionSet
        },
        ...state,
      }
    default:
      return state
  }
}

export default entries
