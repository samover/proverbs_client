$(document).ready(function() {
  var isLoggedIn = true;

  if(isLoggedIn) { 
    $('#navigation').load('views/navigation/login.html');
  } else {
    $('#navigation').load('views/navigation/logout.html');
  }

  $('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });


});
