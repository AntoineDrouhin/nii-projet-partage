import React from 'react';
import HelloWorld from './HelloWorld.component.js'
import FicheAchat from './FicheAchat.component.js'

import Profil from './Profil.component.js'

import FormFicheAchat from './FormFicheAchat.component.js'

import {Col, Row} from 'react-bootstrap'
import Inscription from './Inscription.component.js'

const App = (props) => {

  return (
    <div>

      <Col md={6} style={{backgroundColor: "lightblue"}}>

          <Inscription {...props}/>

      </Col>
    </div>
  )


}

export default App
