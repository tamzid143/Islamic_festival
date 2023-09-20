new VenoBox({
  selector: '.my-video-links',
});




// $('.event_image_slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows: false,
//       centerMode: true,
//       centerPadding: '0',
//       asNavFor: '.event_text_slider',
// });


$('.event_image_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '0',
      asNavFor: '.event_text_slider',
      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    

    $('.event_text_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      prevArrow:'<i class="fa-solid fa-chevron-right right"></i>',
      nextArrow:'<i class="fa-solid fa-chevron-left left"></i>',
      asNavFor: '.event_image_slider'
  });




$('.client_review_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-chevron-right right"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-left left"></i>',

});

$('.counter').counterUp({
      delay: 1,
      time: 1100,
  });

  new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });