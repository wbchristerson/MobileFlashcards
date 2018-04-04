import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlawutqhmz'

/* The deck itself is kept as an object of deck topics/subjects. */

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}


export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      let obj = JSON.parse(results)
      return obj[id]
    })
}


export function saveDeckTitle(newTitle) {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {
      title: newTitle,
      questions: [],
    },
  }))
}

export function addCardToDeck(title, card) {
  getDeck(title)
  .then ((result) => {
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title: title,
        questions: result.questions.push(card)
      }
    }))
  })
}
