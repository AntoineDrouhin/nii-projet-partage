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
    }
};

let store = createStore(partageApp, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
