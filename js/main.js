page = document.getElementById('index-page').value;
if (page == 'index'){

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

// Show the first slide and caption
carouselItems[currentSlide].classList.add('active');

// Function to advance to the next slide
function nextSlide() {
  // Hide the current slide and caption
  carouselItems[currentSlide].classList.remove('active');
  // Increment the current slide index
  currentSlide++;
  // If we've gone beyond the last slide, start over at the beginning
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  // Show the next slide and caption
  carouselItems[currentSlide].classList.add('active');
}

// Function to go back to the previous slide
function prevSlide() {
  // Hide the current slide and caption
  carouselItems[currentSlide].classList.remove('active');
  // Decrement the current slide index
  currentSlide--;
  // If we've gone beyond the first slide, go to the last slide
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1;
  }
  // Show the previous slide and caption
  carouselItems[currentSlide].classList.add('active');
}

// Set up the automatic animation
let autoSlide = setInterval(nextSlide, 7000);

// Pause the automatic animation when the user clicks a button
prevBtn.addEventListener('click', function() {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, 7000);
});

nextBtn.addEventListener('click', function() {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(nextSlide, 7000);
});

}


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1.2);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            $('.nav-link-color').style.color="black";
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
            $('.nav-link-color').style.color="white";
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:6
            }
        }
    });
    
})(jQuery);


 /* Whatsapp Chat Widget by www.bloggermix.com */
 $(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = "+971522822042",
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });
  