const contactForm = document.getElementById('contact-form');

const cancel = document.getElementById('cancel');

const name = document.querySelector('.name'); 
const nameAlert = document.querySelector('.name_alert_msg');
const nameLabel = document.querySelector('.namelabel');

const email = document.querySelector('.email'); 
const emailAlert = document.querySelector('.email_alert_msg');
const emailInvalid = document.querySelector('.email_invalid_msg');
const emailLabel = document.querySelector('.emailLabel');

 
// Check on submit
contactForm.addEventListener("submit",function(e) {

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    e.preventDefault();

    if ( name.value === "") {
        name.style.border="1px solid #ff9200";
        nameAlert.style.display="block";
        nameLabel.style.color="#ff9200";
    } else {
        name.style.border="1px solid ##ced4da;";
        nameAlert.style.display="none";
        nameLabel.style.color="#373d40;";
    }

    if ( email.value === "" ) {
        email.style.border="1px solid #ff9200";
        emailAlert.style.display="block";
        emailLabel.style.color="#ff9200";
        emailInvalid.style.display="none";
    } else {
        email.style.border="1px solid ##ced4da;";
        emailAlert.style.display="none";
        emailLabel.style.color="#373d40";
        emailInvalid.style.display="none";
    }

    if ( email.value !== "" && !mailformat.test(email) ) {
        emailInvalid.style.display="block";
    } else {
        emailInvalid.style.display="none";
    }

});


// Clear input fields
cancel.addEventListener( 'click', function(){
    contactForm.reset();
})




 




