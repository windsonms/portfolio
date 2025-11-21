// pop img
$(document).ready(function () {
  $('#vimeo').magnificPopup({
    items: {
      src: 'images/10149867.jpg'
    },
    type: 'image',
    image: {
      verticalFit: true
    },
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile'
  });

  $('#youtube').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=OZzoAw9QHXY'
    },
    type: 'iframe'
  });

  $('.link').magnificPopup({
    type: 'soundcloud',
    items: {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    type: 'iframe',
  });
});
