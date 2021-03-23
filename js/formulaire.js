/* GESTION DU FORMULAIRE */

function validateForm () {
    let contact_form = document.getElementById("contact_form");
    if (contact_form.reportValidity() == true && addIdPanier.length>0) {
      let contact = {
        'firstName' : document.getElementById("firstName").value,
        'lastName' : document.getElementById("lastName").value,                
        'email' : document.getElementById("email").value,
        'mobile' : document.getElementById("mobile").value,   
        'address' : document.getElementById("address").value,
        'postal' : document.getElementById("postal").value,
        'city' : document.getElementById("city").value,
      };
   
      let productInPanier = addIdPanier;
  
      let contact_form = JSON.stringify({
        contact,
        productInPanier,
      });
  
      /* APEL API AVEC FETCH */
      fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers: {
          'content-type': "application/json"
        },
        mode: "cors",
        body: contact_form
        })
        .then(function (response) {
          return response.json()
        })
        .then(function () {
          localStorage.setItem("contact", JSON.stringify(contact));
          window.location.assign(`confirmation.html?order_id=${order_id}`);
        })
        /* SI PROBLEME API */
        .catch(function (error) {
          console.log("fetch Error");
        });
    }
    else{
      alert("Une erreur est survenue ! Veuillez remplir les champs ci-dessous.")
    };
   
    if (firstName.value == "")                                  
    { 
        document.getElementById('errorfirstName').innerHTML="Veuillez entrez votre nom";  
        firstName.focus(); 
        return false; 
    }else{
        document.getElementById('errorfirstName').innerHTML="";  
    }

    if (lastName.value == "")                                  
    { 
        document.getElementById('errorlastName').innerHTML="Veuillez entrez votre prénom";  
        lastName.focus(); 
        return false; 
    }else{
        document.getElementById('errorlastName').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez votre adresse mail"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (address.value == "")                                   
    { 
        document.getElementById('erroraddress').innerHTML="Veuillez entrez votre adresse"; 
        address.focus(); 
        return false; 
    }else{
        document.getElementById('erroraddress').innerHTML="";  
    }

    if (postal.value == "")                                   
    { 
        document.getElementById('errorpostal').innerHTML="Veuillez entrez votre code postal"; 
        postal.focus(); 
        return false; 
    }else{
        document.getElementById('errorpostal').innerHTML="";  
    }

    if (city.value == "")                                   
    { 
        document.getElementById('errorcity').innerHTML="Veuillez entrez votre ville"; 
        city.focus(); 
        return false; 
    }else{
        document.getElementById('errorcity').innerHTML="";  
    }

    if (mobile.value == "")                                   
    { 
        document.getElementById('errormobile').innerHTML="Veuillez entrez votre numéro"; 
        mobile.focus(); 
        return false; 
    }else {
        document.getElementById('errormobile').innerHTML="";  
    };
}
let EnvoiDuFormulaire = document.getElementById("EnvoiDuFormulaire");
EnvoiDuFormulaire.addEventListener('click', function (event) {
  event.preventDefault();
  validateForm();
});
