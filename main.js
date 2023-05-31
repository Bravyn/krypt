
const nav = document.getElementsByTagName('nav')[0];
  
  // Add scroll event listener

addEventListener('scroll', () => {
    nav.classList.toggle('on__scroll', scrollY > 0)
}) 
  // Trigger the animation for elements already in view

  