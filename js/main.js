(function ($)
{
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 200)
        {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else
        {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event)
    {
        if (this.hash !== "")
        {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length)
            {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function ()
    {
        var $videoSrc;
        $('.btn-play').click(function ()
        {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e)
        {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e)
        {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 100)
        {
            $('.scroll-to-bottom').fadeOut('slow');
        } else
        {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function ()
    {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 200)
        {
            $('.back-to-top').fadeIn('slow');
        } else
        {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function ()
    {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

})(jQuery);

function updateTimer()
{
    future = Date.parse("Oct 1, 2022 00:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span class="pr-5"> nap</span>' + h + '<span class="pr-5"> óra</span>' + m + '<span class="pr-5"> perc</span>' + s + '<span> másodperc</span></div>';
}
setInterval('updateTimer()', 1000);


