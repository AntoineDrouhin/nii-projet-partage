
const ficheAchat = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FICHEACHAT':
      return {
        produit: action.produit,
        titre: action.titre,
        prix: action.prix
      }

    default:
      return state
  }
}

const ficheAchats = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FICHEACHAT':
      return [
        ...state,
        ficheAchat(undefined, action)
      ]
    case 'DELETE_FICHEACHAT':
      return state.filter( ficheAchat => ficheAchat.id !== ficheAchat.id )

    default:
      return state
  }
}

export default ficheAchats
