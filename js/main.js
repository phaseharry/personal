// Select DOM items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

/* 
  Set initial state of menu
  true represents showing the nav-links and portrait
  false represents the default main page with the content showing
  defaults to false
*/
let showMenu = false

const toggleMenu = () => {
  if(!showMenu){ //negates false -> true and true -> false
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navItems.forEach(navItem => navItem.classList.add('show'))

    //change the menu state since it our menu is open
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(navItem => navItem.classList.remove('show'))

    //change the menu state since our menu is closed
    showMenu = false
  }
}

menuBtn.addEventListener('click', toggleMenu)