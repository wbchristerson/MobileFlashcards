import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlawutqhmzdqg'

/* The deck itself is kept as an object of deck topics/subjects. */

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
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
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((result) => {
    let obj = JSON.parse(result)
    if (title in obj) {
      let qArr = obj[title].questions
      qArr.push(card)
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: [title],
          questions: qArr
        }
      }))
    } else {
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: [title],
          questions: [{question: card.question, author: card.author}]
        }
      }))
    }

  })
}
