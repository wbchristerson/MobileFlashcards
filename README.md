# Mobile Flashcards

This project is a flashcard application for Android mobile devices in which users may create collections of flashcards and quiz themselves on the decks that they compile. I created the application using `react-native` along with `redux`. (This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).)

## Structure

* The application begins with a tab navigator composed of two screens:
  - A list view of all currently available flashcard decks. As a starting point, two decks are already provided: "Spanish" (9 cards) and "Architecture" (2 cards). You may quiz yourself with these or add to these decks (note: these two starting decks are static in the sense that any additional cards added to these decks will not appear upon page refreshes/reloads. This is a bug and it is not an issue with any decks created by the user).
  <p align="center">
    <img src="images/Main Screen.png" alt="Main Screen">
  </p>
  - A form to add an additional deck ("new deck"). Submitting the form will take the user to the new page for that deck.
  <p align="center">
    <img src="images/New Deck Screen.png" alt="New Deck Screen">
  </p>
* Individual deck pages can be reached by clicking on a deck from the list view. This lists the name of the deck, the number of cards, and buttons for adding a card to the deck as well as for quizzing one's self.
  <p align="center">
    <img src="images/Deck Screen.png" alt="Deck Screen">
  </p>
* The "new card" form is similar to the "new deck" form.
  <p align="center">
    <img src="images/New Card Screen.png" alt="New Card Screen">
  </p>
* The quiz page displays the deck questions in order with an available button to check the answer and then grade one's self.
  <p align="center">
    <img align="left" src="images/Quiz Question Screen.png" alt="Quiz Question Screen">
    <img src="images/Quiz Answer Screen.png" alt="Quiz Answer Screen">
    <img align="right" src="images/Finished Quiz Screen.png" alt="Finished Quiz Screen">
  </p>
* To maintain data for this application, I used the `AsyncStorage` key-value storage system heavily.

## Downloading The Project

* To download, you can clone the repository using this terminal command:
```
git clone https://github.com/wbchristerson/MobileFlashcards.git
```

Alternatively, follow the instructions below to download to a hard drive:
* Click the green "Clone or download" button above then choose "Download ZIP".
* Find the folder `MobileFlashcards-master` in your Downloads folder or wherever it was placed on your device.
* Right click and choose "Extract All".

* To install all dependencies from the command line, run the following command in the terminal within the project folder:
    - `npm install`
* In another terminal window, run the following command to start the project
    - `npm start`

The terminal will then provide you with several options. If you have the application [Expo](https://expo.io/) on your device, then you can scan the accompanying QR code that appears, which will then give you the option to run the application on mobile (note: the scan is most easily executed on terminals with a black background and a gray or white foreground).


For complete details about running react-native applications such as this one on mobile devices, see [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).
