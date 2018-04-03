import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlashc'

export function getDecks() {
  // AsyncStorage.removeItem(DECKS_STORAGE_KEY)
  // .then((results) => console.log("Shark"))
  // JSON.parse()
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}


// export function getDeck(id) {
// }


export function saveDeckTitle(newTitle) {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {},
  }))
  // let obj = {
  //   ...newTitle,
  // }
  // getDecks()
  // .then((results) => {
  //   AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(results), () => {
  //     AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(obj), () => {
  //       AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
  //         console.log('KEY1 result of merged object: %O', JSON.parse(result))
  //       })
  //     })
  //   })
  // })
}

  // let temp = {
  //   [newTitle]: {
  //     title: '' + newTitle,
  //     questions: []
  //   }
  // }

  // AsyncStorage.getItem(DECKS_STORAGE_KEY)
  // .then((result) => {
  //   AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(result), () => {
  //     AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(temp), () => {
  //       AsyncStorage.getItem(DECKS_STORAGE_KEY)
  //     })
  //   })
  // })

  // return AsyncStorage.mergeItem()
  // return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
  //   [newTitle]: {
  //     title: '' + newTitle,
  //     questions: []
  //   }
  // }))


// export function addCardToDeck(title, card) {
// }
