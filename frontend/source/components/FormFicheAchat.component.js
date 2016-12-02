import React from 'react';
import { Panel,Button, DropdownButton,FormGroup,FormControl, MenuItem, Col } from 'react-bootstrap'


const FormFicheAchat = (props) => {

  return (
    <Panel>

      <h2> {props.text} </h2>

      <FormGroup>
         <p>Prix: <FormControl type="text" placeholder="Prix en Euros" /></p>
         <p>Produit:  <FormControl type="text" placeholder="Nom du Produit"/></p>
         <p>Autre: &nbsp;&nbsp; <FormControl type="text" placeholder="Ecrivez un commentaire" /></p>
         <Button> Valider </Button>
         <Button> Annuler </Button>
     </FormGroup>
    </Panel>
  )

}

export default FormFicheAchat
