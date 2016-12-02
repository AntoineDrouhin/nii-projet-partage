import React from 'react';
import { Image, Col } from 'react-bootstrap'

const Profil = (props) => {

  return (
    <div>
    <h3> Mon compte </h3>
        <Col xs={2} md={4}>
          <Image src="/img/PhotoProfil.png"   circle />
          <p> Identifiant:</p>
          <p>Nom:</p>
          <p>Nom:</p>
          <p>Prenom:</p>
          <p>Adresse:</p>
          <p>Mail:</p>
          <p>Téléphone:</p>
          <p>Mes achats:</p>
        </Col>
      </div>
  )
}

export default Profil
