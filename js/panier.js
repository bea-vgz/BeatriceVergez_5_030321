/* RECUPERATION PANIER LS */
let camera_vintage = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Panier");

/* PRIX INITIAL DU PANIER AVANT AJOUT CAMERA */
let prixPanier = 0;
let addIdPanier = [];

/* CALCUL PRIX TOTAL */
function priceTotalPanier(camera){
    prixPanier = camera.quantity * camera.price / 100;
    /* AFFICHE PRIX TOTAL DU PANIER */
    let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
    localStorage.setItem('prixTotal', JSON.stringify(prixTotal));
};

/* BOUCLE SUR LE PANIER */
camera_vintage.forEach((camera, i) => {
    Container_Panier.innerHTML += `
      <tr>
          <td class="ImagePanier"><img src=${camera.imageUrl} alt="" /></td>
          <td>${camera.name}</td>
          <td> ${camera.lenses}</td>
          <td>${camera.quantity}</td>
          <td>${priceTotalPanier = camera.quantity * camera.price / 100} €</td>
          <td><a href="#" class="SupprProduct" data-id="${i}"> <i class="fas fa-trash-alt"></i></a></td>
      </tr>
    `;
    priceTotalPanier(camera)
});

/* SUPPRESSION CAMERA DU PANIER */
