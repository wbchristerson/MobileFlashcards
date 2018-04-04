import { getDecks, saveDeckTitle } from '../utils/DeckAPI'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_DECK_TO_STORAGE = 'ADD_DECK_TO_STORAGE'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const getDecksFromStorage = () => dispatch => (
  getDecks()
  .then((results) => dispatch(receiveDecks(JSON.parse(results))))
)

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function sendDeckToStorage(deck) {
  return {
    type: ADD_DECK_TO_STORAGE,
    deck,
  }
}

export const addDeckToStorage = (deck) => dispatch => (
  saveDeckTitle(deck)
)