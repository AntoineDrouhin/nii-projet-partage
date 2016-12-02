import React from 'react';
import { Button, Col, Panel } from 'react-bootstrap'

const FicheAchat = (props) => {

  return (
    <Panel>

      <Col sm={3} md={6}>
        <h1>[Fiche Article x]</h1>
        <h2>Nom Produit :</h2>
        <h2>Nom Demandeur :</h2>
        <h2>Montant :</h2>
        <Button bsStyle="success">+</Button>
        <h1></h1>
      </Col>

    </Panel>
  )

}

export default FicheAchat
