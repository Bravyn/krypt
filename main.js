// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  const handleScroll = () => {
    var elements = document.getElementsByClassName('categories');
    
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      
      if (isElementInViewport(element)) {
        element.classList.add('categories');
      }
    }
  }
  
  // Add scroll event listener
window.addEventListener('scroll',  handleScroll);
addEventListener('scroll', () => {
    const nav = document.getElementsByTagName('nav')[0];
    nav.style.backgroundColor = "var(--color-bg1)";
}) 
  // Trigger the animation for elements already in view
handleScroll()
  