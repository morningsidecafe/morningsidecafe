const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("coffee-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("coffee-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("tea-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("tea-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("smoothie-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("smoothie-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("cakes-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("cakes-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("croissants-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("croissants-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageOverlay = document.getElementById("donuts-image-overlay");
  var closeButton = document.querySelector(".close-button");
  var imageCheckbox = document.getElementById("donuts-image-checkbox");

  imageCheckbox.addEventListener("change", function() {
    if (this.checked) {
      imageOverlay.style.display = "block";
    } else {
      imageOverlay.style.display = "none";
    }
  });

  imageOverlay.addEventListener("click", function(event) {
    if (event.target === this || event.target === closeButton) {
      imageCheckbox.checked = false;
      imageOverlay.style.display = "none";
    }
  });
});