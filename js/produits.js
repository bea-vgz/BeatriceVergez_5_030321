/* RECUPERATION URL */
let params = (new URL(document.location)).searchParams;
const id = params.get("id");

let container = document.getElementById("Container_Product");

/* API - Récupération FETCH */
fetch("http://localhost:3000/api/cameras" + id)
    .then(response => response.json())  
    .then(function (product) { 
        let camera = new Cameras_Vintages (product)
        display(camera);
    })
/* API - MESSAGE ERROR */
    .catch(function (error) {
        console.log("Error")
        alert("Une erreur est survenue")
    });

/* LOCAL STORAGE */
    const addLocalStorage = panier => {
    localStorage.setItem('panier', JSON.stringify(panier));
};

/* CODE HTML ARTICLES CAMERAS */
const display = camera => {
    container.innerHTML += `
      <div class="Product">
        <img src=${camera.imageUrl} alt="">
        <div class="Description_Product">
          <p class="nom">${camera.name}</p>
          <p class="prix"> Prix Unitaire: ${camera.price / 100}€</p>
          <p class="ProductDescription">${camera.description}</p>
          <select class="Options">
            <p>Choix des options</p>
          </select>
          <select class="Quantity">           
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>         
          <a href ="./panier.html"><button type ="submit" id="panier" value="submit"> Ajouter au panier</button></a>
        </div>
      </div> `;
}