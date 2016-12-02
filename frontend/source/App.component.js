import React from 'react';
import HelloWorld from './HelloWorld.component.js'
import FicheAchat from './FicheAchat.component.js'
import FormFicheAchat from './FormFicheAchat.component.js'
import {Col, Row} from 'react-bootstrap'

const App = (props) => {

  return (
    <div>

      <Col md="6" style={{backgroundColor: "lightblue"}}>

          <FormFicheAchat {...props} />


      </Col>
    </div>
  )


}

export default App
