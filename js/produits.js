/* RECUPERATION URL - ID DU PRODUIT - Création d'une constante "id" accessible uniquement en lecture */
let params = (new URL(document.location)).searchParams;
const id = params.get("id"); 
/* l'interface URL retourne un objet URLSearchParams, permettant d'accéder aux arguments décodés de la requête GET contenu dans l'URL */

/* LOCAL STORAGE (obtention d’informations pour le panier) */
function addLocalStorage(panier) {
  localStorage.setItem('panier', JSON.stringify(panier));
}

/* API - Récupération FETCH - La méthode then() renvoie une promesse (objet qui est renvoyé, ici "Cameras_Vintages") pour éviter les rappels */
fetch("http://localhost:3000/api/cameras/" + id) /* id = ObjectID */
    .then(response => response.json())  
    .then(function (product) { 
        let camera = new Cameras_Vintages (product) 
        display(camera);
    })

/* API - MESSAGE ERROR */
  .catch(function (error) {
    console.log("Error")
    alert("Problème serveur - Produit non disponible")
});

/* PLACEMENT DANS MON CODE HTML - Création de la variable */
let container = document.getElementById("Container_Product");

/* CODE HTML ARTICLES CAMERAS */
function display(camera) {
  Container_Product.innerHTML += `
  <div class="row Article">
    <div class="col">    
      <article class="Article_Product apparition_produit">
        <img src=${camera.imageUrl} alt="photos produits" class="ImageProduct"/>
        <div class="DescriptionProduct">
          <h2>${camera.name}</h2>
          <p class="PriceProduct" > Prix unitaire : ${camera.price / 100}€</p>
          <p class="ProductDescription">${camera.description}</p>
          <div class="Options">
            <h4 class="OptionsObjectif"> Option </h4>
            <select class="options" id ="option_lentilles">
              <option>Choix de la lentille</option>
            </select>
          </div>
          <div class="Quantité">
            <h4 class="OptionsQuantité"> Quantité </h4>
            <select class="OptionsQuantity" id="quantity">           
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div> 
          <a href ="panier.html"><button type ="submit" value="submit" id="panier">Ajouter au panier</button></a>
        </div>
      </article>
    </div>
  </div> `;

  /* PARTIE "for" OPTION LENTILLES - Appel de l'ID lenses et création du menu déroulant pour les options lentilles */
  for (let lenses of camera.lenses) {
    document.getElementById('option_lentilles').innerHTML +=
      `<option>${lenses}</option>`;
  }

  /* FUNCTION AJOUT AU PANIER */
  function addProductPanier(camera) {
    camera.quantity = parseInt(document.getElementById('quantity').value);
    /* RECUPERATION PANIER LOCAL STORAGE - les éléments seront envoyés dans le panier et pourront ainsi être récupérés */
    let panier = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    /* BOUCLE FOR PANIER = let variable = condition(si faux)
    Création variable "i" - Utilisation une variable qui permet d'additionner plusieurs nbre */
    let cameraAlreadyInPanier = false;
    for (let i = 0; i < panier.length; i++) { //.length renvoie le nombre de paires stockées.
      let product = panier[i];
      /* condition si le produit existe */
      if (product.id === camera.id) {
        cameraAlreadyInPanier = i;
      }
    };
    /* Utilisation d'instruction if/else (si la condition donnée est vraie).
    Si la caméra est déjà dans le panier, ajout d'une autre caméra "quantity", on incrémente la quantité */
    if (false !== cameraAlreadyInPanier) {
      panier[cameraAlreadyInPanier].quantity = parseInt(panier[cameraAlreadyInPanier].quantity) + camera.quantity;
    } else {
      panier.push(camera);
    };
    addLocalStorage(panier);
  }
  /* CLICK AJOUT PANIER - appel fonction pour envoi de la caméra dans le panier - Écoute de l'événement : action émise par l'utilisateur, comme le clic sur un bouton */
  document.getElementById('panier') /* on récupère l'élément sur lequel je souhaite détecter le click */
  .addEventListener('click', function() { /* on écoute l'élément click */
  addProductPanier(camera); /* on utilise la fonction créée plus haut pour indiquer comment doit se comporter l'élément lors de l'ajout au panier */
  });
}