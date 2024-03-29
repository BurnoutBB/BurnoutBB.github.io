function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      setTimeout(function() {
        var offset = 50;
        window.scrollBy(0, -offset);
      }, 0);
      setTimeout(function() {
        section.classList.add('highlight_sql');
      }, 0);
      section.addEventListener('transitionend', function removeHighlight() {
        section.classList.remove('highlight_sql');
        section.removeEventListener('transitionend', removeHighlight);
      });
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }