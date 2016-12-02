import React from 'react';
import { Button, Col, Panel, ButtonToolbar } from 'react-bootstrap'

const FicheAchat = (props) => {

  return (
    <Panel>

        <h4>{props.text}</h4>
        <h5>Nom Produit : {props.produit}</h5>
        <h5>Nom Demandeur : {props.user}</h5>
        <h5>Montant : {props.prix}</h5>
        <Col md={8} />
        <Col md={4}>
          <ButtonToolbar >
            <Col md={6}>
            <a href="https://www.paypal.com/" target="_blank" ><Button bsStyle="success">Payer</Button></a>
            </Col>
            <Col md={6}>
            <Button bsStyle="danger" onClick={props.onDelete(props.id)}>Supprimer</Button>
            </Col>
          </ButtonToolbar >
        </Col>

    </Panel>
  )

}

export default FicheAchat
