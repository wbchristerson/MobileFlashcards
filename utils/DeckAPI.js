import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlashc'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}


// export function getDeck(id) {
// }


export function saveDeckTitle(newTitle) {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {},
  }))
}


// export function addCardToDeck(title, card) {
// }
