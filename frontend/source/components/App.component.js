import React from 'react';
import Profil from '../containers/Profil.container.js'
import { Col, Row } from 'react-bootstrap'


const App = (props) => {
  return (
    <div>
      <Col md={3} style={{backgroundColor: "lightblue"}}>
          <Profil />
      </Col>
    </div>
  )
}

export default App
