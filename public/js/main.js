'use strict';
// Add year for footer
$('#year').text(new Date().getFullYear());


// Smooth Scrolling
$('.cf a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});


console.log('main loaded...');