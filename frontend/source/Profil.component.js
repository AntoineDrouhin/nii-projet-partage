import React from 'react';
import { Image, Col, Panel } from 'react-bootstrap'

const Profil = (props) => {

  return (
    <Panel>
    <h3> Mon compte </h3>
        
          <Image src="/img/PhotoProfil.png" responsive  circle />
          <p> Identifiant:</p>
          <p>Nom:</p>
          <p>Nom:</p>
          <p>Prenom:</p>
          <p>Adresse:</p>
          <p>Mail:</p>
          <p>Téléphone:</p>
          <p>Mes achats:</p>

    </Panel>
  )
}

export default Profil
