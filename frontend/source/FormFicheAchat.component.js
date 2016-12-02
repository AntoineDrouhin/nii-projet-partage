import React from 'react';
import { Panel,Button, DropdownButton,FormGroup,FormControl, MenuItem, Col } from 'react-bootstrap'


const FormFicheAchat = (props) => {

  return (
    <Panel>
    <Col md='6'>

          <h2> Fiche Achat </h2>

      <FormGroup>
         <p>Prix:  &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp; <FormControl type="text" placeholder="Prix en Euros" /></p>
         <p>Produit:  &emsp;&emsp;&emsp;<FormControl type="text" placeholder="Nom du Produit"/></p>
         <p>Autre: &nbsp;&nbsp;&emsp;&emsp;&emsp; <FormControl type="text" placeholder="Ecrivez un commentaire" /></p>

   </FormGroup>
        <Button> Valider </Button>&emsp;
        <Button> Annuler </Button>

      </Col>

    </Panel>
  )

}

export default FormFicheAchat
