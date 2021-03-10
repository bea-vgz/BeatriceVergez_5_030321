/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_Camera");

/* API - Récupération FETCH */
fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())  
    .then(function (listProduct) { 
        for (let product of listProduct) {
            let camera = new Cameras_Vintages (product)
            display(camera);
        }
    })
/* API - MESSAGE ERROR */
    .catch(function (error) {
        console.log("Error")
        alert("Produit non disponible")
    });

/* CODE HTML ARTICLES CAMERAS */
function display(camera) {
    Container_Camera.innerHTML += `
    <div class="row Article">
        <div class="col">
            <article class="ArticleProduct">
                <a href="produits.html" class="article">
                    <figure class="FigureProduct">
                        <img src=${camera.imageUrl} alt="photos produits" class="Image_article" />
                    </figure>
                    <div class="DescriptionProduct">
                        <h2>${camera.name}</h2>
                        <p class="PriceProduct">${camera.price / 100}€</p>
                        <p>${camera.description}</p>
                        <a href="produit.html?id=${camera.id}"> Voir la fiche produit </a>
                    </div>
                </a>
            </article>
        </div>
    </div>`;
}