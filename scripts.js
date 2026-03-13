document.addEventListener("DOMContentLoaded", function() {
    console.log("LCE group website loaded");

    // Function to show/hide sections
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    };

    // Prevent default anchor behavior (scrolling)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Show the default section
    showSection('home');
});

function showFullSizeImage1() {
  var modal = document.getElementById('imageModal1');
  var img = document.getElementById('thumbnail1');
  var modalImg = document.getElementById('fullImage1');

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal1() {
  var modal = document.getElementById('imageModal1');
  modal.style.display = "none";
}

function showFullSizeImage2() {
  var modal = document.getElementById('imageModal2');
  var img = document.getElementById('thumbnail2');
  var modalImg = document.getElementById('fullImage2');

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal2() {
  var modal = document.getElementById('imageModal2');
  modal.style.display = "none";
}

function showFullSizeImage3() {
  var modal = document.getElementById('imageModal3');
  var img = document.getElementById('thumbnail3');
  var modalImg = document.getElementById('fullImage3');

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal3() {
  var modal = document.getElementById('imageModal3');
  modal.style.display = "none";
}
