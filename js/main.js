(function($) {
  "use strict";
  
  setTimeout(function(){        
    $('#preloader').fadeOut();
    $('.preloader_img').delay(150).fadeOut('slow'); 
  }, 500);

  // Back to top button
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });

  $('.back-to-top').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#header').addClass('header-scrolled');
      } else {
          $('#header').removeClass('header-scrolled');
      }
  });

  if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto, .cta-btn').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {
              var top_space = 0;

              if ($('#header').length) {
                  top_space = $('#header').outerHeight();

                  if (!$('#header').hasClass('header-scrolled')) {
                      top_space = top_space - 40;
                  }
              }

              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');

              if ($(this).parents('.main-nav, .mobile-nav').length) {
                  $('.main-nav .active, .mobile-nav .active').removeClass('active');
                  $(this).closest('li').addClass('active');
              }

              if ($('body').hasClass('mobile-nav-active')) {
                  $('body').removeClass('mobile-nav-active');
                  $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('.mobile-nav-overly').fadeOut();
              }
              return false;
          }
      }
  });

  /*******************************************************************************************************/
  /*******************************************************************************************************/
  /** Extremely sorry for this redundunt code, but I do was unable improve with loop and hence did this **/ 
  /******** If someone in the future can improve it to remove the redundant code, please do so ***********/
  /*******************************************************************************************************/
  /*******************************************************************************************************/

  // This code changes the name-designation on hover of the images in the team's section

  // Chairperson
  $(function() {
    $('.teamid1').hover(
      function() { $('#team-name-1').css('display', 'none'); $('#post-name-1').css('display', 'block');
    }, 
      function() { $('#team-name-1').css('display', 'block'); $('#post-name-1').css('display', 'none');
    });
  });

  // Vice-Chairperson
  $(function() {
    $('.teamid2').hover(
      function() { $('#team-name-2').css('display', 'none'); $('#post-name-2').css('display', 'block');
    }, 
      function() { $('#team-name-2').css('display', 'block'); $('#post-name-2').css('display', 'none');
    });
  });

  // Secretary
  $(function() {
    $('.teamid3').hover(
      function() { $('#team-name-3').css('display', 'none'); $('#post-name-3').css('display', 'block');
    }, 
      function() { $('#team-name-3').css('display', 'block'); $('#post-name-3').css('display', 'none');
    });
  });

  // Treasurer
  $(function() {
    $('.teamid4').hover(
      function() { $('#team-name-4').css('display', 'none'); $('#post-name-4').css('display', 'block');
    }, 
      function() { $('#team-name-4').css('display', 'block'); $('#post-name-4').css('display', 'none');
    });
  });

  // Event Manager
  $(function() {
    $('.teamid5').hover(
      function() { $('#team-name-5').css('display', 'none'); $('#post-name-5').css('display', 'block');
    }, 
      function() { $('#team-name-5').css('display', 'block'); $('#post-name-5').css('display', 'none');
    });
  });

  // Spon Head
  $(function() {
    $('.teamid6').hover(
      function() { $('#team-name-6').css('display', 'none'); $('#post-name-6').css('display', 'block');
    }, 
      function() { $('#team-name-6').css('display', 'block'); $('#post-name-6').css('display', 'none');
    });
  });

  // Pub Head
  $(function() {
    $('.teamid7').hover(
      function() { $('#team-name-7').css('display', 'none'); $('#post-name-7').css('display', 'block');
    }, 
      function() { $('#team-name-7').css('display', 'block'); $('#post-name-7').css('display', 'none');
    });
  });

  // Webmaster
  $(function() {
   $('.teamid8').hover(
      function() { $('#team-name-8').css('display', 'none'); $('#post-name-8').css('display', 'block');
   }, 
      function() { $('#team-name-8').css('display', 'block'); $('#post-name-8').css('display', 'none');
   });
  });

  /*******************************************************************************************************/
                                  // Core done, starting with Faculty
  /*******************************************************************************************************/


  // Branch Counsellor
  $(function() {
    $('.facultyid1').hover(
      function() { $('#faculty-name-1').css('display', 'none'); $('#faculty-post-name-1').css('display', 'block');
    }, 
      function() { $('#faculty-name-1').css('display', 'block'); $('#faculty-post-name-1').css('display', 'none');
    });
  });  

  // Faculty In-charge 1
  $(function() {
    $('.facultyid2').hover(
      function() { $('#faculty-name-2').css('display', 'none'); $('#faculty-post-name-2').css('display', 'block');
    }, 
      function() { $('#faculty-name-2').css('display', 'block'); $('#faculty-post-name-2').css('display', 'none');
    });
  });  

  // Faculty In-charge 2
  $(function() {
    $('.facultyid3').hover(
      function() { $('#faculty-name-3').css('display', 'none'); $('#faculty-post-name-3').css('display', 'block');
    }, 
      function() { $('#faculty-name-3').css('display', 'block'); $('#faculty-post-name-3').css('display', 'none');
    });
  });  

  // Faculty In-charge 3
  $(function() {
    $('.facultyid4').hover(
      function() { $('#faculty-name-4').css('display', 'none'); $('#faculty-post-name-4').css('display', 'block');
    }, 
      function() { $('#faculty-name-4').css('display', 'block'); $('#faculty-post-name-4').css('display', 'none');
    });
  });  

  /*******************************************************************************************************/
  /*******************************************************************************************************/
  /*******************************************************************************************************/

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop();

      nav_sections.each(function() {

          var activeClass = $(this).attr('id');

          var top = $(this).offset().top - main_nav_height - 200,
              bottom = top + $(this).outerHeight();


          if (cur_pos >= top && cur_pos <= bottom) {

              main_nav.find('a').removeClass('active');
              main_nav.find('a[href="#' + activeClass + '"]').addClass('active');

              /* Check if either of activities section (current or former core) is active 
                 & if yes, then make parent activities section active as welltoo*/
              if (activeClass.includes("19-20") || activeClass.includes("20-21")){
                main_nav.find('a[href="#activities"]').addClass('active');
                mobile_nav.find('a[href="#activities"]').addClass('active');
              }


              // Home Page Top Navigation Bar
              if (activeClass == "intro" || activeClass == "contact") {
                  document.body.className = "accent";
              } else if (activeClass == "about") {
                  document.body.className = "blue";
              } else if (activeClass == "services") {
                  document.body.className = "purple";
              } else if (activeClass == "event-gal") {
                  document.body.className = "red";
              } else if (activeClass == "events") {
                  document.body.className = "yellow";
              } else if (activeClass == "team") {
                  document.body.className = "green";
              } else if (activeClass == "faq") {
                  document.body.className = "blue";
              } 
              
              // Events Page Top Navigation Bar
              else if (activeClass == "activities") {
                document.body.className = "blue";
              } else if (activeClass == "fest") {
                  document.body.className = "purple";
              } else if (activeClass == "iv") {
                  document.body.className = "red";
              } else if (activeClass == "magazine") {
                  document.body.className = "yellow";
              }

          }
      });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
      var eventGalIsotope = $('.event-gal-container').isotope({
          itemSelector: '.event-gal-item'
      });
      $('#event-gal-flters li').on('click', function() {
          console.log("clicked");
          $("#event-gal-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');
          eventGalIsotope.isotope({
              filter: $(this).data('filter')
          });
      });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
          0: {
              items: 2
          },
          768: {
              items: 4
          },
          900: {
              items: 6
          }
      }
  });


  $(document).ready(function() {

      $(".form-control").click(function() {
          $(this).parent().addClass("label-animate");
      });

      $(window).click(function() {
          if (!$(event.target).is('.form-control')) {
              $(".form-control").each(function() {
                  if ($(this).val() == '') {
                      $(this).parent().removeClass("label-animate");
                  }
              });
          }
      });
  });

})(jQuery);