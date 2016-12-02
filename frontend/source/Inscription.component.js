import React from 'react';
import { Button, DropdownButton,FormGroup,FormControl, MenuItem, Col } from 'react-bootstrap'


const Inscription = (props) => {

  return (
    <div>
    <Col md='6'>

          <h2> Formulaire </h2>
      <p>  Statut :
        <DropdownButton title="Statut :" id="Statutdropdown">
          <MenuItem eventKey="1">Refugié</MenuItem>
          <MenuItem eventKey="2">Benevole</MenuItem>
          <MenuItem eventKey="3">Commercial</MenuItem>
         </DropdownButton>
      </p>
      <FormGroup>
         <p>Nom:  &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp; <FormControl type="text" placeholder="Nom" /></p>
         <p>Prenom:  &emsp;&emsp;&emsp;<FormControl type="text" placeholder="Prenom"/></p>
         <p>Email : &nbsp;&nbsp;&emsp;&emsp;&emsp; <FormControl type="text" placeholder="Email" /></p>
         <p>Mot de passe:  <FormControl type="password" placeholder="Mot de passe" /></p>
   </FormGroup>
        <Button> Valider </Button>&emsp;
        <Button> Annuler </Button>

      </Col>

    </div>
  )

}

export default Inscription
