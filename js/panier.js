/* RECUPERATION PANIER LOCAL STORAGE - Création d'une variable - Objet */
let camera_vintage = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Panier");

/* PRIX INITIAL + INFO DU PANIER AVANT AJOUT CAMERA */
let prixPanier = 0; /* prix des éléments */
let prixTotalPanier = 0; /* prix total panier */
let addIdPanier = []; /* objet */

/* FUNTION CALCUL PRIX TOTAL PANIER PRODUITS 
Création de la fonction du Prix Total du panier */
function TOTAL_PANIER(camera){
  prixPanier += camera.quantity * camera.price / 100; /* prix des caméras = quantité x prix (en centimes) */

/* PRIX TOTAL DU PANIER */
 let prixTotalPanier = document.getElementById('prixTotalPanier').textContent = prixPanier + " € ";
  localStorage.setItem('prixTotalPanier', JSON.stringify(prixTotalPanier));
};

/* LE PANIER HTML */
camera_vintage.forEach((camera, i) => { /* Pour chaque caméras ajoutées au panier, ajout de l'image, le nom, la quantité, le prix (en fonction de la quantité) */
    Container_Panier.innerHTML += `
    <table class="table">
        <tr class="Tableau">
            <td><img class="ImagePanier" src=${camera.imageUrl} alt="" /></td>
            <td><h5>${camera.name}</h5></td>
            <td type="number">${camera.quantity}</td>
            <td><strong>${camera.quantity * camera.price / 100} €</strong></td>
            <td><button class="SupprProduct fas fa-trash fa text-danger" data-id="${i}" title="Supprimer un produit"></button></td>
        </tr>
    </table>
    `;
    TOTAL_PANIER(camera) /* appel de la fonction Prix Total du panier */
});

/* FUNCTION SUPPRESSION PRODUIT DU PANIER */
function SupprProduct(id) { /* Création de la fonction suppression des caméras (id) */
  let camera = camera_vintage[id];
  /* INSTRUCTIONS IF/ELSE - si la quantité est supérieure à 1, possibilité de supprimer un élément, suppression que d'un seul élément à la fois */
  if (camera.quantity > 1) {
    camera.quantity--;
  } else {
      camera_vintage.splice(id, 1);
  }
  localStorage.setItem('panier', JSON.stringify(camera_vintage));
  window.location.reload();
  alert("Le produit vient d'être supprimer")
}
/* CLICK SUPRESSION D'1 PRODUIT */
document.querySelectorAll(".SupprProduct").forEach(deleteButton => {
  deleteButton.addEventListener('click',() => SupprProduct(deleteButton.dataset.id))
});

/* CLICK SUPPRESSION TOUT LE PANIER - Création d'une instruction */
let SupprPanier = document.getElementById('SupprPanier')
SupprPanier.addEventListener('click', deletePanier);

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
    localStorage.clear();
    alert("Votre panier est sur le point d'être supprimer")
  }
};

