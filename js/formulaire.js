/* GESTION PARTIE FORMULAIRE - fonction avec création variable "contact" pour rubrique du formulaire client + variable products */
function SendForm() {
  let contact_form = document.getElementById("contact_form");
  if (contact_form.reportValidity() == true && camera_vintage.length > 0) {
    let contact = {
      'civilité' : document.getElementById("civilité").value,
      'firstName' : document.getElementById("firstName").value,
      'lastName' : document.getElementById("lastName").value,                
      'email' : document.getElementById("email").value,
      'mobile' : document.getElementById("mobile").value,   
      'address' : document.getElementById("address").value,
      'postal' : document.getElementById("postal").value,
      'city' : document.getElementById("city").value,
    };
    
    /* produits dans panier */
    let products = addIdPanier;
    
    /* La variable comprend la requête JSON qui contiendra la variable contact et la varible products */
    let FormClient = JSON.stringify({
      contact, products,
    });

    /* API AVEC FETCH */
    fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: FormClient
      })
      .then(function(response) {
        return response.json()
      })
      .then(function(cam) {
        localStorage.setItem("contact", JSON.stringify(cam.contact));
        localStorage.removeItem('panier');
        window.location.assign("confirmation.html?orderId=" + cam.orderId);
      })
      /* API - MESSAGE ERROR */
      .catch(function (error) {
        console.log("Error");
      });
  } else {
    alert("Oups ! Une erreur est survenue. Veuillez remplir les champs ci-dessous ou vérifier que votre commande contient un article.")
  };

  /* REMPLISSAGE DES CHAMPS - si valeur n'est pas remplie (vide), alors return false avec message erreur, sinon validée si regex respecté */
  if (firstName.value == "")                                  
  {   document.getElementById('errorfirstName').innerHTML="Veuillez entrer votre nom";  
      firstName.focus();
      return false; 
  } else {
      document.getElementById('firstName');
      firstName.style.color = 'green';
  };
  if (lastName.value == "")                                  
  {   document.getElementById('errorlastName').innerHTML="Veuillez entrer votre prénom";  
      lastName.focus();
      return false; 
  } else {
      document.getElementById('lastName');
      lastName.style.color = 'green';  
  };
  if (mobile.value == "")                                   
  {   document.getElementById('errormobile').innerHTML="Veuillez entrer votre numéro"; 
      mobile.focus();
      return false;
  } else {
      document.getElementById('mobile');
      mobile.style.color = 'green'; 
  };
  if (email.value == "")                                   
  {   document.getElementById('erroremail').innerHTML="Veuillez entrer votre adresse mail"; 
      email.focus();
      return false; 
  } else {
      document.getElementById('email');
      email.style.color = 'green';  
  };
  if (address.value == "")                                   
  {   document.getElementById('erroraddress').innerHTML="Veuillez entrer votre adresse"; 
      address.focus(); 
      return false; 
  } else {
      document.getElementById('address');
      email.style.color = 'green';  
  };
  if (postal.value == "")                                   
  {   document.getElementById('errorpostal').innerHTML="Veuillez entrer votre code postal"; 
      postal.focus();
      return false; 
  } else {
      document.getElementById('postal');
      postal.style.color = 'green';  
  };
  if (city.value == "")                                   
  {   document.getElementById('errorcity').innerHTML="Veuillez entrer votre ville"; 
      city.focus();
      return false; 
  } else {
      document.getElementById('city');
      city.style.color = 'green'; 
  };
}
/* Écoute de l'évènement au click + appel fonction SendForm */
let SendFormulaire = document.getElementById("SendFormulaire");
  SendFormulaire.addEventListener('click', function(event) {
    event.preventDefault();
    SendForm();
});