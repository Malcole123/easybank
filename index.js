var menuCntrl = document.getElementById('openMenu')
var menuOpen = false
var menu = document.getElementById('navLinks');
var menuBack = document.getElementById('navBack');

var socialLinks = document.getElementsByClassName('social-links')

function openMenu(){
    if(menuOpen === false){
        menuCntrl.src="images/icon-close.svg"
        menu.style.right = "10%"
        menuBack.style.right="0"
        menuOpen = true
    }else{
        menuCntrl.src="images/icon-hamburger.svg"
        menu.style.right = "-100%";
        menuBack.style.right="-100%"
        menuOpen = false
    }
}

