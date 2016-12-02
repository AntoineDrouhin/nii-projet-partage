import { connect } from 'react-redux'
import { addFicheAchat } from '../actions'
import ProfilComponent from '../components/Profil.component'

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
    nom: state.profil.nom,
    prenom: state.profil.prenom,
    imgUrl: state.profil.imgUrl,
    mail: state.profil.mail
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
  mapStateToProps
  //mapDispatchToProps
)(ProfilComponent)



export default Profil
