export default function printMe() {
  console.log("Yee Haw! I get called from load.js!");
}

 function loadNav(){

  const navBar = document.createElement('div')


  navBar.id = 'navbar'

  //append navbar
  navBar.appendChild(createNav())

  return navBar
}


function createNav (){
const div = document.createElement('div');

  const homeButton = document.createElement('button');

  homeButton.classList.add('navButton');
  homeButton.textContent = 'Home';


  const menuButton = document.createElement('button');
  menuButton.classList.add('navButton');
  menuButton.textContent = 'Menu';


  const contactButton = document.createElement('button');
  contactButton.classList.add('navButton');
  contactButton.textContent = 'Contact';

div.appendChild(homeButton)
div.appendChild(menuButton)
div.appendChild(contactButton)

  return div 
    
  }

export { loadNav }