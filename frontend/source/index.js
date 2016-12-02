import React from 'react'
import { render } from 'react-dom'
import App from './components/App.component.js'
import partageApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    profil: {
      username: "leKers",
      typeUser: "b",
      nom: "Saker",
      prenom: "Annas",
      imgUrl: "http://www.toutpourmonchat.fr/wp-content/uploads/2013/07/chat-bien-etre.jpg",
      mail: "annas.saker@gmail.com"
    },
    ficheAchats: [
      {
        id: 1,
        text: "Aidez moi a nourrir mes enfants",
        produit: "10kg de riz",
        user: "Josh",
        prix: "30€"
      },
      {
        id: 2,
        text: "J'ai besoin d'une lampe a gaz pour nous éclairer la nuit",
        produit: "Lampe a gaz",
        user: "Annas",
        prix: "45€"

      }
    ]
};

let store = createStore(partageApp, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
