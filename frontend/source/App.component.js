import React from 'react';
import HelloWorld from './HelloWorld.component.js'
import FicheAchat from './FicheAchat.component.js'
import Profil from './Profil.component.js'
import {Col, Row} from 'react-bootstrap'

const App = (props) => {

  return (
    <div>

      <Col md="3" style={{backgroundColor: "lightblue"}}>

          <Profil {...props} />


      </Col>
    </div>
  )


}

export default App
