import { connect } from 'react-redux'
import { addFicheAchat } from '../actions'
import FormFicheAchat from '../components/FormFicheAchat.component'

// const getExpensesTypes = (expensesTypes) => {
//   return expensesTypes
// }
//
// const mapStateToProps = (state) => {
//   return {
//     expensesTypes: getExpensesTypes(state.expensesTypes)
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onValidate: (produit,titre,prix) => {
      dispatch(addFicheAchat(produit,titre,prix))
    }
  }
}

const FormFicheAchat = connect(
  //mapStateToProps,
  mapDispatchToProps
)(FormFicheAchat)


export default FormFicheAchat
