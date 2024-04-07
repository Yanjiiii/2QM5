// script.js

window.onload = function() {
    adjustGallery();
  };
  
  window.onresize = function() {
    adjustGallery();
  };
  
  function adjustGallery() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    var numItemsPerRow = 3; // Default number of items per row
  
    if (window.innerWidth < 768) {
      numItemsPerRow = 1; // Adjust for smaller screens
    } else if (window.innerWidth < 992) {
      numItemsPerRow = 2; // Adjust for medium-sized screens
    }
  
    var galleryWidth = document.querySelector('.gallery').offsetWidth;
    var itemWidth = (galleryWidth / numItemsPerRow) - 20; // Subtracting margin
  
    galleryItems.forEach(function(item) {
      item.style.flex = '0 0 ' + itemWidth + 'px';
    });
  }
  