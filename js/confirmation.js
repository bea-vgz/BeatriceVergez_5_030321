/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_confirmation");

/* RECUPERATION DES DONNEES DE L URL */
let params = (new URL(document.location)).searchParams;

/* RECUPERATION DES DONNEES CONTACT */
let contact = JSON.parse(localStorage.getItem("contact"));

/* RECUPERATION DU PRIX TOTAL */
let prixTotalPanier = JSON.parse(localStorage.getItem("prixTotalPanier"));

/* RECUPERATION DU FORMULAIRE */
let SendFormulaire = document.getElementById("SendFormulaire");

/* AFFICHAGE HTML */
function RecapCommande (){
    Container_confirmation.innerHTML += `
        <p> Merci ${contact.firstName} ${contact.lastName} pour votre commande N°
        d'un montant de : ${prixTotalPanier} </br> 
        Un email vous sera envoyé à l'adresse suivante : ${contact.email} </p> 
    `;
};

RecapCommande();