import { connect } from 'react-redux'
import { addFicheAchat } from '../actions'
import Profil from '../components/Profil.component'

const getTypeUser = (typeUser) => {
  if (typeUser === "b") {
    return "Benevole"
  }
  if (typeUser === "r") {
    return "refugié"
  }
  if (typeUser === "c") {
    return "Commercant"
  }

}

const mapStateToProps = (state) => {
  return {
    username: state.profil.username,
    typeUser: getTypeUser(state.profil.typeUser),
    nom: state.profil.username,
    prenom: state.profil.username,
    imgUrl: state.profil.imgUrl
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onValidate: (produit,titre,prix) => {
//       dispatch(addFicheAchat(produit,titre,prix))
//     }
//   }
// }

const Profil = connect(
  mapStateToProps,
  //mapDispatchToProps
)(Profil)


export default Profil
