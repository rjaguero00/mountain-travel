// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top + 2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event) {
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else {
//             currLink.removeClass("active");
//         }
//     });
// }

$(document).ready(function () {

    // add the event listener for 'click' events
    $('.nav-link').on('click', function (e) {
        e.preventDefault(); // prevent the default action from executing
        var id = $(e.currentTarget).attr('href'); // get the destinations id
        var $dest = $(id); // convert the desination into a jQuery object

        // animate the scroll position to the destination over a period of 1000ms
        $('html,body').animate({
            scrollTop: ($dest.offset().top)
        }, 1000);
    });

});