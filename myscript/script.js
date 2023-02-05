// bar toggle start here============>>>>>>>>>>

function clickBar() {
    var impbar = document.getElementById("headerFlex");
    impbar.classList.toggle('nav_expand');

    var flex_div = document.getElementById("flex_div");
    flex_div.classList.toggle('full_length');

    // cross sign start here====>>>>>>>>>>>>>>>

    var hide_first = document.getElementById("hide_first");
    hide_first.classList.toggle('first_cross');

    var hide_second = document.getElementById("hide_second");
    hide_second.classList.toggle('second_cross');

    var hide_third = document.getElementById("hide_third");
    hide_third.classList.toggle('third_cross');
}

// onclick function start here for hader file====>>>>>>>
function mynav() {
    var nav = document.getElementById("nav_opn");
    if (nav.style.display == "none") {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
}

// slider js===>>
$('.product-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        600: {
            items: 1,
            dots: true,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: true
        }
    }
})