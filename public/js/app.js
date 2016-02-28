$(document).ready(function() {
  var QUOTE_API = 'http://localhost:8080/api/'
  var isLoggedIn = true;
  getQuote();

  if(isLoggedIn) { 
    $('#navigation').load('views/navigation/login.html');
  } else {
    $('#navigation').load('views/navigation/logout.html');
  }

  $('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });

  $('.new_quote').on('click', getQuote);

  function getQuote() {
    $.getJSON(QUOTE_API + 'proverb', function(data) {
      var proverb = data.proverb.replace(/\n/, '<br>');
      $('blockquote p').html(proverb);
    });
  }
});
