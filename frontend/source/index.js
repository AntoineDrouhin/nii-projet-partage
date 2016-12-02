import React from 'react'
import { render } from 'react-dom'
import App from './App.component.js'
import achatApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    profil: {
      username: "leKers",
      typeUser: "b",
      nom: "Saker",
      prenom: "Annas",
      imgUrl: "http://www.toutpourmonchat.fr/wp-content/uploads/2013/07/chat-bien-etre.jpg"
    }
};

let store = createStore(expenseApp, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
