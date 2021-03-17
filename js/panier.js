/* RECUPERATION PANIER LS */
let camera_vintage = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Panier");

/* PRIX INITIAL DU PANIER AVANT AJOUT CAMERA */
let prixPanier = 0;
let panier = [];

/* FUNTION CALCUL PRIX TOTAL */
function prixTotalPanier(camera){
    prixPanier += camera.quantity * camera.price / 100;
    let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
    localStorage.setItem('prixTotal', JSON.stringify(prixTotal));
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
            <td><strong>${prixPanier = camera.quantity * camera.price / 100} €</strong></td>
            <td><button class="SupprProduct fas fa-trash fa text-danger" data-id="${i}"></button></td>
        </tr>
    </table>
    <button id="ConfirmCommande">Passer la commande</button>
    `;
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
  }
/* SUPRESSION D'1 PRODUIT */
document.querySelectorAll(".SupprProduct").forEach(deleteButton => {
  deleteButton.addEventListener('click', () => SupprProduct(deleteButton.dataset.id))
});