/* RECUPERATION URL - ID DU PRODUIT*/
let params = (new URL(document.location)).searchParams;
const id = params.get("id");

/* LOCAL STORAGE */
const addLocalStorage = panier => {
localStorage.setItem('panier', JSON.stringify(panier));
}

/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Product");

/* API - Récupération FETCH */
fetch("http://localhost:3000/api/cameras/" + id)
    .then(response => response.json())  
    .then(function (product) { 
        let camera = new Cameras_Vintages (product)
        display(camera);
    })

/* API - MESSAGE ERROR */
  .catch(function (error) {
    console.log("Error")
});

/* CODE HTML ARTICLES CAMERAS */
const display = camera => {
  Container_Product.innerHTML += `
  <div class="row Article">
    <div class="col">    
      <article class="Article_Product">
        <img src=${camera.imageUrl} alt="photos produits" class="ImageProduct"/>
        <div class="DescriptionProduct">
          <h2>${camera.name}</h2>
          <p class="PriceProduct"> Prix unitaire : ${camera.price / 100}€</p>
          <p class="ProductDescription">${camera.description}</p>
          <div class="Options">
            <h4 class="OptionsObjectif"> Option </h4>
            <select class="options" id ="option_lentilles">
              <option>Choix de la lentille</option>
            </select>
          </div>
          <div class="Quantité">
            <h4 class="OptionsQuantité"> Quantité </h4>
            <select class="OptionsQuantity" id = "quantity">           
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>      
          <a href ="panier.html"><button type ="submit" value="submit" id="panier">Ajouter au panier</button></a>
        </div>
      </article>
    </div>
  </div> `;

/* PARTIE OPTION */
  for (let lenses of camera.lenses){
    document.getElementById('option_lentilles').innerHTML+=
    `<option>${lenses}</option>`
  }
/* PARTIE CLICK */
    document.getElementById('panier').addEventListener('click', function () {
      addProductPanier(camera)
  });
};

/* AJOUT AU PANIER */ 
function addProductPanier(camera) {
  camera.quantity = parseInt(document.getElementById('quantity').value);
}
