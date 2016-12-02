import { connect } from 'react-redux'
import { deleteFicheAchat } from '../actions'
import FicheAchat from '../components/FicheAchat.component'
//
// const getTypeUser = (typeUser) => {
//   // if (typeUser === "b") {
//   //   return "Benevole"
//   // }
//   // if (typeUser === "r") {
//   //   return "refugié"
//   // }
//   // if (typeUser === "c") {
//   //   return "Commercant"
//   // }
//
// }

const mapStateToProps = (state) => {
  return {
    id : state.id,
    prix : state.prix,
    produit : state.produit,
    user : state.user,
    quantite : state.quantite
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (produit,titre,prix) => {
      dispatch(deleteFicheAchat(id))
    }
  }
}


const FicheAchat = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheAchat)


export default FicheAchat
