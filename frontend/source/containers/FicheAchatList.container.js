import { connect } from 'react-redux'
import { deleteFicheAchat } from '../actions'
import FicheAchatListComponent from '../components/FicheAchatList.component'

const mapStateToProps = (state) => {
  return {
    ficheAchats: state.ficheAchats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteFicheAchat(id))
    }
  }
}

const FicheAchatList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheAchatListComponent)

export default FicheAchatList
