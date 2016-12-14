myVar = null;


//-------------------------------------scrolling feature-----------------------
// var lastScrollTop = 0;

// $( document ).ready(function() {
//     console.log( "ready!" );
//     var lastScrollTop = 0;
//     $(window).scroll(function (event) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop) {
//             console.log('down')
//         } else {
//             console.log('up')
//         }
//         lastScrollTop = st;
//     });
// });


function add_rotate(delay) {
    if (delay === 'delay') {
        myVar = setTimeout(function () {
            $('#cube').addClass('rotate');
        }, 5000);
    }
    else {
        $('#cube').addClass('rotate');
    }
}

function clear_timeout() {
    clearTimeout(myVar);
}

function cube_spin(side) {
    var cube = $('#cube');

    cube.removeClass('show-front');
    cube.removeClass('show-right');
    cube.removeClass('show-back');
    cube.removeClass('show-left');

    if (cube.hasClass('rotate')) {
        cube.removeClass('rotate');
        add_rotate('delay');
        cube.addClass('fast_rotate');
        setTimeout(function () {
            switch (side) {
                case 1:
                    cube.removeClass('fast_rotate');
                    cube.addClass('show-front');
                    break;
                case 2:
                    cube.removeClass('fast_rotate');
                    cube.addClass('show-right');
                    break;
                case 3:
                    cube.removeClass('fast_rotate');
                    cube.addClass('show-back');
                    break;
                case 4:
                    cube.removeClass('fast_rotate');
                    cube.addClass('show-left');
                    break;
            }
        }, 500);
    }
    else {
        clear_timeout();
        add_rotate('delay');
        switch (side) {
            case 1:
                cube.removeClass('fast_rotate');
                cube.addClass('show-front');
                break;
            case 2:
                cube.removeClass('fast_rotate');
                cube.addClass('show-right');
                break;
            case 3:
                cube.removeClass('fast_rotate');
                cube.addClass('show-back');
                break;
            case 4:
                cube.removeClass('fast_rotate');
                cube.addClass('show-left');
                break;
        }

    }
}
function side_expand(side) {
    switch (side) {
        case 1:
            $('.side1').fadeToggle();
            break;
        case 2:
            $('.side2').fadeToggle();
            break;
        case 3:
            $('.side3').fadeToggle();
            break;
        case 4:
            $('.side4').fadeToggle();
            break;
        case 5:
            $('.side5').fadeToggle();
            break;
        case 6:
            $('.side6').fadeToggle();
            break;
    }
}

//----------------- blinking text -----------------------------------
var items = {};

var Item = function (imgSrc, height, width, sensitivity) {
    var item = this;
    var img = document.createElement('img');
    // img.src = 'http://www.jumpstartsports.com/upload/images/Radnor_Basketball/448650-basketball__mario_sports_mix_.png';
    img.src = imgSrc;
    img.style.position = 'absolute';
    // img.style.height = '50px';
    // img.style.width = '50px';
    img.style.height = height + 'px';
    img.style.width = width + 'px';
    item.position = [];
    img.onload = function () {
        item.setTransform([window.innerWidth / 2, window.innerHeight / 2], 0);
        document.body.appendChild(img);
    }

    item.setTransform = function (position, rotation) {


        item.position[0] = position[0] * sensitivity;
        item.position[1] = position[1] * sensitivity;

        img.style.left = position[0] * sensitivity - img.width / 2 + 'px';
        img.style.top = position[1] * sensitivity - img.height / 2 + 'px';

        img.style.transform = 'rotate(' + -rotation + 'rad)';

        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
            img.style.OTransform = img.style.transform;

    };

};
