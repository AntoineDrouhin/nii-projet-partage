
// FicheAchat

export const addFicheAchat = (produit,titre,prix) => {
  return {
    type: 'ADD_FICHEACHAT',
    produit,
    titre,
    prix
  }
}

export const deleteFicheAchat = (id) => {
  return {
    type: 'DELETE_FICHEACHAT',
    id
  }
}
