function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
 document.addEventListener('DOMContentLoaded', function() {
    var contactButton = document.getElementById('contactButton');
    var contactSection = document.getElementById('contact');

    contactButton.addEventListener('click', function() {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
 });
