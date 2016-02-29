$(document).ready(function() {
  var proverb;
  var QUOTE_API = 'https://proverbs-api.herokuapp.com/api/'
  getQuote();

  $('#tweet').on('click', function() {
    var params = 'text=' + proverb
                + '&hashtags=wisdom'
                + '&url=http://goo.gl/s7mHTR';
    window.open('https://twitter.com/intent/tweet?' + params, null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");
  });

  $('.new_quote').on('click', getQuote);

  function getQuote() {
    $.getJSON(QUOTE_API + 'proverb', function(data) {
      proverb = data.proverb.replace(/\n/, '<br>');
      $('blockquote p').html(proverb);
    });
  }
});
