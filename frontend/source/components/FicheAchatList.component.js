import React from 'react'
import FicheAchat from './FicheAchat.component.js'
import { Button, Col, Panel } from 'react-bootstrap'

const FicheAchatList = (props) => {

  return (
    <div>
      {props.ficheAchats.map(ficheAchat =>
        <FicheAchat
        key={ficheAchat.id}
        {...ficheAchat}
        onDelete={props.onDelete}
        />
      )}
  </div>
  )

}

export default FicheAchatList
