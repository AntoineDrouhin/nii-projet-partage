import React from 'react';
import Profil from '../containers/Profil.container.js'
import FicheAchatList from '../containers/FicheAchatList.container.js'
import TopBar from './TopBar.component.js'
import { Col, Row, Panel } from 'react-bootstrap'


const App = (props) => {
  return (
    <div>

      <TopBar />
      <Panel style={{backgroundColor: "lightgrey"}}>
        <Col md={3}>
            <Profil />
        </Col>
        <Col md={6}>
          <FicheAchatList />
        </Col>
      </Panel>
    </div>
  )
}

export default App
