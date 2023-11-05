// jQuery for menu button click event
$('#menu-btn').click(function() {
    $('.header .navbar').toggleClass('active');
  });
  
  // jQuery for close button click event
  $('#nav-close').click(function() {
    $('.header .navbar').removeClass('active');
  });
  
  // jQuery for search button click event
  $('#search-btn').click(function() {
    $('.search-form').addClass('active');
  });
  
  // jQuery for close search button click event
  $('#close-search').click(function() {
    $('.search-form').removeClass('active');
  });
  
  // AngularJS scroll event
  angular.module('myApp', [])
    .controller('myController', function($scope) {
      angular.element(window).on('scroll', function() {
        $('.header .navbar').removeClass('active');
        if (window.scrollY > 0) {
          $('.header').addClass('active');
        } else {
          $('.header').removeClass('active');
        }
      });
    });
  
  // Bootstrap tooltip initialization
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
  