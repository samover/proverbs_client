$(document).ready(function() {
  var QUOTE_API = 'http://localhost:8080/api/'
  getQuote();

  $('.new_quote').on('click', getQuote);

  function getQuote() {
    $.getJSON(QUOTE_API + 'proverb', function(data) {
      var proverb = data.proverb.replace(/\n/, '<br>');
      $('blockquote p').html(proverb);
    });
  }
});
