import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlas'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}


// export function getDeck(id) {
// }


export function saveDeckTitle(newTitle) {
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((results) => console.log(results))
  
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {
      title: newTitle,
      questions: [],
    },
  }))
}


// export function addCardToDeck(title, card) {
// }
