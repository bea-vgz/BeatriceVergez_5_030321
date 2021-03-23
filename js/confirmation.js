let container = document.getElementById("Container_confirmation");

/* RECUPERATION DES DONNEES DE L URL */
let paramsUrl = new URL(window.location).searchParams;

let order_id = paramsUrl.get("order_id");

/* RECUPERATION DES DONNEES CONTACT */
let contact = JSON.parse(localStorage.getItem("contact"));

/* RECUPERATION DU PRIX TOTAL */
let prixTotalPanier = JSON.parse(localStorage.getItem("prixTotalPanier"));

/* AFFICHAGE HTML */
function display (){
    Container_confirmation.innerHTML += `
        <p>
        Merci ${contact.firstName} ${contact.lastName} pour votre commande N°${order_id}
        d'un montant de : ${prixTotalPanier} </br>
        </p>
        Un email vous sera envoyé à l'adresse suivante : ${contact.email}  
    `;
};
