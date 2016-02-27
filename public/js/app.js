$(document).ready(function() {
  var QUOTE_API = 'http://localhost:8080/api/'
  var isLoggedIn = true;
  ran_col();
  if(isLoggedIn) { 
    $('#navigation').load('views/navigation/login.html');
  } else {
    $('#navigation').load('views/navigation/logout.html');
  }

  $('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });

  $('#new_quote').on('click', function() {
    ran_col();
    $.getJSON(QUOTE_API + 'quote', function(data) {
      console.log(data);
      $('blockquote p').html(data.text);
      $('p.quote-author').html(data.authors[0]);
    });
  });

  function ran_col() { 
    var color = '#'; 
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
    $('body').css('background-color', color);
  }

});
