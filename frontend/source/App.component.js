import React from 'react';
import FicheAchat from './components/FicheAchat.component.js'
import {Col, Row} from 'react-bootstrap'

const App = (props) => {

  return (
    <div>

      <Col md="6" style={{backgroundColor: "lightblue"}}>

          <FicheAchat {...props} />


      </Col>
    </div>
  )


}

export default App
