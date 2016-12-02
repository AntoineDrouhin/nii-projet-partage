
// FicheAchat

export const addFicheAchat = (produit,titre,prix) => {
  return {
    type: 'ADD_FICHEACHAT',
    produit,
    titre,
    prix
  }
}
