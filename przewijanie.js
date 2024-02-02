document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        var highlightedElement = document.querySelector('.highlight');
        if (highlightedElement) {
          highlightedElement.classList.remove('highlight');
        }
        if (targetElement) {
          targetElement.classList.add('highlight');
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          window.scrollBy(0, -50);
          setTimeout(function() {
            targetElement.classList.remove('highlight');
          }, 2000);
        }
      });
    });
  });
  