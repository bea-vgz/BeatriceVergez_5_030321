/* PLACEMENT DANS MON CODE HTML - Création de la variable */
let container = document.getElementById("Container_Camera"); 
/* renvoie l'objet "Element" dont la propriété "id" correspond à la chaîne de caractères spécifiée. 
L'ID (identifiant) de l'élément est localisé et placé dans mon HTML. */

/* API - Récupération FETCH - Moyen de récupérer les ressources/données à travers le réseau de manière asynchrone */
fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())  
    .then(function (listProduct) { 
        for (let product of listProduct) {
            let camera = new Cameras_Vintages(product)
            display(camera);
        }
    })
/* API - MESSAGE ERROR - Message d'erreur si les informations récupérées ne sont pas disponibles */
    .catch(function(error) {
        console.log("Error")
        alert("Produit non disponible")
    });

/* CODE HTML ARTICLES CAMERAS - Création de la fonction et insertion des ID appelés par la variable */
function display(camera) {
    Container_Camera.innerHTML += `
    <div class="row Article">
        <div class="col">
            <article class="ArticleProduct animation_article">
                <a href="produits.html?id=${camera.id}" class="article">
                    <figure class="FigureProduct">
                        <img src=${camera.imageUrl} alt="photos produits" class="Image_article" />
                    </figure>
                    <div class="DescriptionProduct">
                        <h2>${camera.name}</h2>
                        <p class="PriceProduct">${camera.price / 100}€</p>
                        <p class="ProductDescription">${camera.description}</p>
                        <a href="produits.html?id=${camera.id}"> Voir la fiche produit </a>
                    </div>
                </a>
            </article>
        </div>
    </div>`;
};
