import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlawutqhmzdqg'

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
  // AsynStorage.getItem(DECKS_STORAGE_KEY)
  // .then((results) => {
  //   AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
  //
  //   }))
  // })

  // getDeck(title)
  // .then ((result) => {
  //   console.log("Ex: ", result)
  //   AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
  //     [title]: {
  //       title: title,
  //       questions: result.questions.concat([card])
  //     }
  //   }))
  // })
}
