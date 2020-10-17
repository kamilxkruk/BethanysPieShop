function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
let hamburgerButton = document.getElementById('hamburgerBtn');
hamburgerButton.onclick = toggleMenu;