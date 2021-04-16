/* RECUPERATION PANIER LOCAL STORAGE - Création d'une variable - Objet - récupération des éléments envoyés dans LS et ajoutés au panier */
let camera_vintage = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

/* PRIX INITIAL + INFO DU PANIER AVANT AJOUT CAMERA */
let prixPanier = 0; /* prix des éléments/produits selon la quantité */
let prixTotalPanier = 0; /* prix total panier */
let addIdPanier = []; /* objet - produits */

/* FUNTION CALCUL PRIX TOTAL PANIER PRODUITS 
Création de la fonction du Prix Total du panier */
function TOTAL_PANIER(camera){
  prixPanier += camera.quantity * camera.price / 100; /* prix des caméras = quantité x prix (en centimes) */

/* PRIX TOTAL DU PANIER */
 let prixTotalPanier = document.getElementById('prixTotalPanier').textContent = prixPanier + " € ";
  localStorage.setItem('prixTotalPanier', JSON.stringify(prixTotalPanier));
};

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Panier");

/* LE PANIER HTML */
camera_vintage.forEach((camera, i) => { /* Pour chaque caméras ajoutées au panier, ajout de l'image, le nom, la quantité, le prix (en fonction de la quantité) */
    Container_Panier.innerHTML += `
    <table class="table">
        <tr class="Tableau">
            <td><img class="ImagePanier" src=${camera.imageUrl} alt="" /></td>
            <td><h5>${camera.name}</h5></td>
            <td type="number" class="quantityProduct">
              <button type="number" class="SupprQuantity fas fa-minus-circle" data-id="${i}"></button>  
              ${camera.quantity}
              <button type="number" class="AjoutQuantity fas fa-plus-circle" data-id="${i}"></button> 
            </td>
            <td><strong>${camera.quantity * camera.price / 100} €</strong></td>
            <td><button class="SupprProduct fas fa-trash fa text-danger" data-id="${i}" title="Supprimer un produit"></button></td>
        </tr>
    </table>
    `;
    TOTAL_PANIER(camera) /* appel de la fonction Prix Total du panier */
});

/* FUNCTION SUPPRESSION PRODUIT DU PANIER */
function SupprProduct(id) { /* Création de la fonction suppression des caméras (id) */
  let camera = camera_vintage[id]; /* sélection de l'id du produit qui va être supprimé */
  /* INSTRUCTIONS IF/ELSE */
  if (camera.quantity < 1) {
    camera.quantity--; /* décrémente et enlève un produit */
  } else {
      camera_vintage.splice(id, 1);
  }
  /* on envoie la variable dans le LocalStorage - transformation en format JSON */
  localStorage.setItem('panier', JSON.stringify(camera_vintage));
  /* recharge la source */
  window.location.reload();
  /* alerte pour avertir que le produit a été supprimer */
  alert("Le produit vient d'être supprimé")
}
/* CLICK SUPRESSION D'1 PRODUIT */
document.querySelectorAll(".SupprProduct").forEach(deleteButton => {
  deleteButton.addEventListener('click',() => SupprProduct(deleteButton.dataset.id))
});


/* FUNCTION MODIFICATION QTÉ PRODUIT DU PANIER - AJOUT */
function AjoutQuantity(id) { /* Création de la fonction ajout caméra (id) */
  let camera = camera_vintage[id]; /* sélection de l'id du produit qui va être ajouté */
  /* INSTRUCTIONS IF/ELSE - si la quantité est supérieure à 1, ajouter un produit */
  if (camera.quantity > 0) {
    camera.quantity++; /* incrémente et ajoute un élément */
  } else {
      camera_vintage.splice(id, 1);
  }
  localStorage.setItem('panier', JSON.stringify(camera_vintage));
  window.location.reload();
}
/* CLICK MODIFICATION QUANTITÉ D'1 PRODUIT - ajout */
document.querySelectorAll(".AjoutQuantity").forEach(addButton => {
  addButton.addEventListener('click',() => AjoutQuantity(addButton.dataset.id))
});


/* FUNCTION MODIFICATION QTÉ PRODUIT DU PANIER - RETRAIT */
function SupprQuantity(id) { /* Création de la fonction ajout caméra (id) */
  let camera = camera_vintage[id]; /* sélection de l'id du produit qui va être supprimé */
  /* INSTRUCTIONS IF/ELSE - si la quantité est supérieure à 1, enlever un produit */
  if (camera.quantity > 1) {
    camera.quantity--; /* décrémente et enlève un élément */
  } else {
      camera_vintage.splice(id, 1);
  }
  localStorage.setItem('panier', JSON.stringify(camera_vintage));
  window.location.reload();
}
/* CLICK MODIFICATION QUANTITÉ D'1 PRODUIT - retrait */
document.querySelectorAll(".SupprQuantity").forEach(deleteButton => {
  deleteButton.addEventListener('click',() => SupprQuantity(deleteButton.dataset.id))
});


/* FONCTION SUPPRIME TOUT LE PANIER */
function deletePanier() {
  document.getElementById("PanierVide").innerHTML += `
    <div class="container col-6 text-center shadow rounded p-4 Panier_vide">
      <h1 class="mb-4">Votre panier est vide...</h1>
      <i class="panier_icon fas fa-shopping-cart fa-2x"></i><br />
      <a href ="index.html"><input id="Validation" type="submit" value="Retour à l'accueil"/></a>
    </div>`
  ;
  document.getElementById("FormulaireCoordonnées").style.display = "none";
  document.getElementById("SupprPanier").style.display = "none";
  document.getElementById("Container_Panier").style.display = "none";
  document.getElementById("title_container").style.display = "none";
/* Condition pour que le message panier vide s'affiche - if/else */
  if (camera_vintage == null) {
  } else {
    container.remove();
    localStorage.clear(); /* La méthode clear() vide toutes les clés stockées */
    alert("Votre panier est sur le point d'être supprimé")
  }
};
/* CLICK SUPPRESSION TOUT LE PANIER - Création d'une variable */
let SupprPanier = document.getElementById('SupprPanier')
SupprPanier.addEventListener('click', deletePanier);

