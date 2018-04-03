import { AsyncStorage } from 'react-native'

let DECKS_STORAGE_KEY = 'MobileFlashcardsDeck'

// export function getDecks() {
// }


// export function getDeck(id) {
// }


export function saveDeckTitle(title) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: '' + title,
      questions: []
    }
  }))
}


// export function addCardToDeck(title, card) {
// }
