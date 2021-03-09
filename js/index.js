let container = document.getElementById("Container_camera");

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
const display = camera => {
    container.innerHTML += `
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
    </div>`
};

class Cameras_Vintages {
    constructor({
        name,
        imageUrl,
        price,
        _id,
        description,
        lenses,
    }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = _id;
        this.description = description;
        this.lenses = lenses;
    }
};
