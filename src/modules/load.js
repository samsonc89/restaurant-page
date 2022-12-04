export default function printMe() {
  console.log("Yee Haw! I get called from load.js!");
}
import {loadHome} from './home.js';
import {loadMenu} from './menu.js'



 function loadNav(){
  const navBar = document.createElement('div')
  navBar.id = 'navbar'

    const homeButton = document.createElement('button');    
    homeButton.classList.add('navButton');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', loadHome
    )
    
    const menuButton = document.createElement('button');
    menuButton.classList.add('navButton');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', loadMenu)
    
    const contactButton = document.createElement('button');
    contactButton.classList.add('navButton');
    contactButton.textContent = 'Contact';
    
    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(contactButton)
    
    return navBar

  }

  function loadWrapper (){

    //clear current content 


    const mainWrapper = document.createElement('div')
    mainWrapper.id = 'main-wrapper'
    mainWrapper.textContent = "Helloooo there"

    return mainWrapper
}

export { loadNav, loadWrapper }