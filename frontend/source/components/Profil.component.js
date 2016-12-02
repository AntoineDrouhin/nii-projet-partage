import React from 'react';
import { Image, Col, Panel } from 'react-bootstrap'

const Profil = (props) => {

  return (
    <Panel>
    <h3> Mon compte </h3>
          <Image src={props.imgUrl} responsive  circle />
          <p> Identifiant: {props.username}</p>
          <p>Nom: {props.nom}</p>
          <p>Prenom: {props.prenom}</p>
          <p>Mail: <a src={"mailto:" + props.mail}>{props.mail}</a></p>
    </Panel>
  )
}

export default Profil
