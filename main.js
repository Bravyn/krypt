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
  function handleScroll() {
    var elements = document.getElementsByClassName('element');
    
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      }
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll',  handleScroll);
  
  // Trigger the animation for elements already in view
  handleScroll();
  