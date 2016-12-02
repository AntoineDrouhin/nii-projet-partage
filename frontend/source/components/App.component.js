import React from 'react';

import FicheAchat from './FicheAchat.component.js'
import Profil from '../container/Profil.container.js'
import FormFicheAchat from './FormFicheAchat.component.js'
import Inscription from './Inscription.component.js'

import { Col, Row } from 'react-bootstrap'
import Inscription from './Inscription.component.js'

const App = (props) => {
  return (
    <div>
      <Col md={3} style={{backgroundColor: "lightblue"}}>
          <Profil {...props}/>
      </Col>
    </div>
  )
}

export default App
