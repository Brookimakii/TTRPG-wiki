// jQuery.noConflict();
// (function($) {
//   $(document).ready(function() {
//     /* removes text from search form on focus and replaces it on unfocus - if text is entered then it does not get replaced with default on unfocus */
//     /*
//         $('#SearchForm_SearchForm_action_results').val('L');
//         var searchField = $('#SearchForm_SearchForm_Search');
//         var default_value = searchField.val();
//         searchField.focus(function() {
//           $(this).addClass('active');
//           if(searchField.val() == default_value) {
//             searchField.val('');
//           }
//         });
//         searchField.blur(function() {
//           if(searchField.val() == '') {
//             searchField.val(default_value);
//           }
//         });
//     */
//
//     if (!$.browser.msie || ($.browser.msie && (parseInt($.browser.version, 10) > 8))) {
//       var searchBarButton = $("span.search-dropdown-icon");
//       var searchBar = $('div.search-bar');
//       var menuButton = $("span.nav-open-button");
//       var menu = $('.header .primary ul');
//       var sideNavButton = $(".secondary h3");
//       var sideNav = $('.secondary > ul');	/* > important pour ne pas affecter l'ul du sous menu */
//       var mobile = false;
//       var changed = false;
//
//       $('body').append('<div id="media-query-trigger"></div>');
//
//       function menuWidthCheck() {
//         var header_w = $('header .inner').width();
//         var elements_w = menu.width() + $('.brand').width();
//
//         if ((header_w < elements_w) || ($(window).width() <= 900)) {
//           $('body').addClass('tablet-nav');
//         }
//         else {
//           $('body').removeClass('tablet-nav');
//         }
//
//         mobile_old = mobile;
//         if ($('#media-query-trigger').css('visibility') == 'hidden') {
//           mobile = false;
//         }
//         else {
//           mobile = true;
//         }
//
//         if (mobile_old != mobile) {
//           changed = true;
//         }
//         else {
//           changed = false;
//         }
//       }
//
//       menuWidthCheck();
//
//       $(window).resize(function() {
//         menuWidthCheck();
//
//         if (!mobile) {
//           menu.show();
//           searchBar.show();
//           sideNav.show();
//           $('.fa-angle-up').show();
//           $('.fa-angle-down').hide();
//         }
//         else {
//           if (changed) {
//             menu.hide();
//             searchBar.hide();
//             sideNav.hide();
//             $('.fa-angle-up').hide();
//             $('.fa-angle-down').show();
//           }
//         }
//       });
//
//       /* toggle navigation and search in mobile view */
//       searchBarButton.click(function() {
//         menu.slideUp();
//         searchBar.slideToggle(200);
//       });
//
//       menuButton.click(function() {
//         searchBar.slideUp();
//         menu.slideToggle(200);
//       });
//
//       sideNavButton.click(function() {
//         sideNav.slideToggle(200);
//         $('.fa-angle-up').toggle();
//         $('.fa-angle-down').toggle();
//       });
//     }
//
//     $("div.reponse").click(function() { $(this).find("div").toggleClass("spoiler"); });
//
//   });
//
// // ---------------------------------------------------------
// // Use of jQuery.browser is frowned upon.
// // More details: http://api.jquery.com/jQuery.browser
// // jQuery.uaMatch maintained for back-compat
//
//
//
// // ---------------------------------------------------------
//
// }(jQuery));
let searchBarButton = document.querySelector("span.search-dropdown-icon");
let searchBar = document.querySelector('div.search-bar');
let menuButton = document.querySelector("span.nav-open-button");
let menu = document.querySelector('.header .primary ul');
let sideNavButton = document.querySelector(".secondary h3");
let sideNav = document.querySelector('.secondary > ul');	/* > important pour ne pas affecter l'ul du sous menu */
let mobile = false;

let menuHeight = 0;
let menuHeightChecked = false;
let interval = null

export const secondaryToggle = ()=> {
  let sideNav = document.querySelector('.secondary > ul');	/* > important pour ne pas affecter l'ul du sous menu */
  console.log(sideNav)
  // console.log(sideNav.style.display)
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none"
  }else{
    sideNav.style.display = "block"
  }

}

export const primaryToggle = ()=>  {
  let menu = document.querySelector('.header .primary ul');
  console.log(menu)
  // console.log(sideNav.style.display)
  if (menu.style.display === "block") {
    menu.style.display = "none"
  }else{
    menu.style.display = "block"
  }

}
export const primaryResize = ()=>  {
  console.log(menu.style.widths)
  console.log("here")
  if (menu.style.display === "none"){}

}