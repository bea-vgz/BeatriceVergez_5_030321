/* GESTION PARTIE FORMULAIRE */

function SendForm() {
  let contact_form = document.getElementById("contact_form");
  if (contact_form.reportValidity() == true) {
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
 
    let products = addIdPanier;

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
        window.location.assign("confirmation.html?orderId=" + cam.orderId);
      })
      /* API - MESSAGE ERROR */
      .catch(function (error) {
        console.log("Error");
      });
  } else {
    alert("Oups ! Une erreur est survenue. Veuillez remplir les champs ci-dessous ou vérifier votre commande.")
  };
  /* REMPLISSAGE DES CHAMPS */
  if (firstName.value == "")                                  
  {   document.getElementById('errorfirstName').innerHTML="Veuillez entrer votre nom";  
      firstName.focus(); 
      return false; 
  } else {
      document.getElementById('errorfirstName').innerHTML=`<i class="fas fa-check"></i>`;
      firstName.style.color = 'green';  
  };
  if (lastName.value == "")                                  
  {   document.getElementById('errorlastName').innerHTML="Veuillez entrer votre prénom";  
      lastName.focus(); 
      return false; 
  } else {
      document.getElementById('errorlastName').innerHTML=`<i class="fas fa-check"></i>`;
      lastName.style.color = 'green';  
  };
  if (email.value == "")                                   
  {   document.getElementById('erroremail').innerHTML="Veuillez entrer votre adresse mail"; 
      email.focus(); 
      return false; 
  } else {
      document.getElementById('erroremail').innerHTML=`<i class="fas fa-check"></i>`;
      email.style.color = 'green';  
  };
  if (email.value.indexOf("@", 0) < 0)                 
  {   document.getElementById('erroremail').innerHTML="Veuillez entrer une adresse mail valide"; 
      email.focus(); 
      return false; 
  } 
  if (email.value.indexOf(".", 0) < 0)                 
  {   document.getElementById('erroremail').innerHTML="Veuillez entrer une adresse mail valide"; 
      email.focus(); 
      return false; 
  } 
  if (address.value == "")                                   
  {   document.getElementById('erroraddress').innerHTML="Veuillez entrer votre adresse"; 
      address.focus(); 
      return false; 
  } else {
      document.getElementById('erroraddress').innerHTML=`<i class="fas fa-check"></i>`;
      email.style.color = 'green';  
  };
  if (postal.value == "")                                   
  {   document.getElementById('errorpostal').innerHTML="Veuillez entrer votre code postal"; 
      postal.focus(); 
      return false; 
  } else {
      document.getElementById('postal').innerHTML=`<i class="fas fa-check"></i>`;
      postal.style.color = 'green';  
  };
  if (city.value == "")                                   
  {   document.getElementById('errorcity').innerHTML="Veuillez entrer votre ville"; 
      city.focus(); 
      return false; 
  } else {
      document.getElementById('errorcity').innerHTML=`<i class="fas fa-check"></i>`;
      city.style.color = 'green'; 
  };
  if (mobile.value == "")                                   
  {   document.getElementById('errormobile').innerHTML="Veuillez entrer votre numéro"; 
      mobile.focus(); 
      return false; 
  } else {
      document.getElementById('errormobile').innerHTML=`<i class="fas fa-check"></i>`;
      mobile.style.color = 'green'; 
  };
}

let SendFormulaire = document.getElementById("SendFormulaire");
  SendFormulaire.addEventListener('click', function(event) {
    event.preventDefault();
    SendForm();
});