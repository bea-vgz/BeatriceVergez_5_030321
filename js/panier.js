/* RECUPERATION PANIER LS */
let camera_vintage = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Panier");

/* PRIX INITIAL DU PANIER AVANT AJOUT CAMERA */
let prixPanier = 0;
let prixTotalPanier = 0;
let addIdPanier = [];

/* FUNTION CALCUL PRIX TOTAL PANIER PRODUITS */
function TOTAL_PANIER(camera){
  prixPanier += camera.quantity * camera.price / 100;

/* PRIX TOTAL PRODUITS */
 let prixTotalPanier = document.getElementById('prixTotalPanier').textContent = prixPanier + " € ";
  localStorage.setItem('prixTotalPanier', JSON.stringify(prixTotalPanier));
};

/* LE PANIER */
camera_vintage.forEach((camera, i) => {
    Container_Panier.innerHTML += `
    <table class="table">
        <tr class="Tableau">
            <td><img class="ImagePanier" src=${camera.imageUrl} alt="" /></td>
            <td><h5>${camera.name}</h5></td>
            <td>${camera.lenses}</td>
            <td>${camera.quantity}</td>
            <td><strong>${camera.quantity * camera.price / 100} €</strong></td>
            <td><button class="SupprProduct fas fa-trash fa text-danger" data-id="${i}"></button></td>
        </tr>
    </table>
    `;
    TOTAL_PANIER(camera)
});

/* FUNTION SUPPRESSION PRODUIT DU PANIER */
function SupprProduct(id) {
    let camera = camera_vintage[id];
    /* INSTRUCTIONS IF/ELSE */
    if (camera.quantity > 1) {
      camera.quantity--;
    } else {
        camera_vintage.splice(id, 1);
    }
    localStorage.setItem('panier', JSON.stringify(camera_vintage));
    window.location.reload();
    alert("Le produit vient d'être supprimer")
  }
/* SUPRESSION D'1 PRODUIT */
document.querySelectorAll(".SupprProduct").forEach(deleteButton => {
  deleteButton.addEventListener('click',() => SupprProduct(deleteButton.dataset.id))
});

/* SUPPRESSION - TOUT LE PANIER */
let SupprPanier = document.getElementById('SupprPanier')
SupprPanier.addEventListener('click', deletePanier);

/* FONCTION SUPPRIME TOUT LE PANIER */
function deletePanier() {
  if (camera_vintage == null) {
  } else {
    container.remove();
    localStorage.clear();
    window.location.reload();
    alert("Votre panier est sur le point d'être supprimer")
    document.location.href = 'index.html'
  }
};