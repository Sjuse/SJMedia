let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

function acceptTerms() {
    document.getElementById("termsContainer").style.display = "none";
}

function declineTerms() {
    alert(
        "Welcome to SJ Media!\n\n" +
        "To continue using our website, you must review and accept our Terms of Service. By clicking 'Accept,' you agree to comply with our terms and conditions. If you do not agree, please refrain from using this website.\n\n" +
        "Thank you for your understanding!"
    );
}

// Show the modal when the page loads
window.onload = function() {
    termsCondition.style.display = 'flex'; // show the modal
};

// Check if the user has already accepted the terms
if (!localStorage.getItem('termsAccepted')) {
    termsCondition.style.display = 'flex'; //show the modal
}

// Hide the modal and store acceptance in local storage
acceptButton.addEventListener('click', function() {
    termsCondition.style.display = 'none';
    localStorage.setItem('termsAccepted', 'true');
});
