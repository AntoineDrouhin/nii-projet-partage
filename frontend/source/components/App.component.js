import React from 'react';
import Profil from '../containers/Profil.container.js'
import FicheAchatList from '../containers/FicheAchatList.container.js'
import { Col, Row } from 'react-bootstrap'


const App = (props) => {
  return (
    <div>
      <Col md={3} style={{backgroundColor: "lightblue"}}>
          <Profil />
      </Col>
      <Col md={6}>
        <FicheAchatList />
      </Col>
    </div>
  )
}

export default App
