/* PLACEMENT DANS MON CODE HTML */
let container = document.getElementById("Container_confirmation");

/* RECUPERATION DES DONNEES DE L'URL */
let params = (new URL(document.location)).searchParams;

/* RECUPERATION DE L'ID */
let orderId = params.get("orderId");

/* RECUPERATION DES DONNEES CONTACT */
let contact = JSON.parse(localStorage.getItem("contact"));

/* RECUPERATION DU PRIX TOTAL */
let prixTotalPanier = JSON.parse(localStorage.getItem("prixTotalPanier"));

/* RECUPERATION DU PANIER */
let panier = JSON.parse(localStorage.getItem("panier"));

/* AFFICHAGE DANS HTML - Paragraphe de remerciement pour la commande passé par l'utilisateur */
function RecapCommande (){
    Container_confirmation.innerHTML += `
        <div>
            <div class="confirmation_commande">
                <i class="fas fa-check validation_commande"></i>
            </div>
            <p> Merci ${contact.civilité} ${contact.firstName} ${contact.lastName} pour votre commande n°${orderId}
            d'un montant de <strong> ${prixTotalPanier} </strong></br> 
            Un email de confirmation vous sera envoyé à l'adresse suivante : ${contact.email} <br/></p>
            
            <p>Le colis vous sera livré sous 5 jours ouvrés à l'adresse indiquée : <strong> ${contact.address} ${contact.postal} ${contact.city}. </strong><br/>
            Vous serez informé des étapes de livraison par email.</p>

            <h3>À bientôt !</h3>
            <i class="fas fa-camera"></i>
        </div>
    `;
};
RecapCommande ();
