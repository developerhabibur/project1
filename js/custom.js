
/* upper button scroll start*/
$(document).ready(function () {
$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x > 500) {
        $('#upper').fadeIn();
    } else {
        $('#upper').fadeOut();
    }
});

/* upper button click to top*/
$('#upper').click(function () {
    $('html').animate({ scrollTop: 0 }, 1500)
});
})

////////// // Owl carousel/////////////
    $('#owlcarousel1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1140: {
                items: 3,
            },
        }
    });

    $('.customNextBtn1').click(function () {
        $('#owlcarousel1').trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn1').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('#owlcarousel1').trigger('prev.owl.carousel', [300]);
    });


    $('#owlcarousel2').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1140: {
                items: 3,
            },
        }
    });

    $('.customNextBtn2').click(function () {
        $('#owlcarousel2').trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn2').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('#owlcarousel2').trigger('prev.owl.carousel', [300]);
    });

