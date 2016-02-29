var QuoteBox = React.createClass({
  render: function() {
    return (
      <div className="quote-wrap quote-box">
        <div className="quote-thumb"></div>
        <blockquote cite="https://www.gutenberg.org/ebooks/39281"><p>...</p></blockquote>
        <div className="row">
          <div className="col-md-2">
            <button className="pull-left btn btn-warning new_quote">New Quote</button>
          </div>
          <div className="col-md-10">
            <div className="quote-attribution">
                <p className="quote-author">Wise Old Person</p>
                <cite><a href="http://www.gutenberg.org/ebooks/39281">Dictionary of
                  English Proverbs and Proverbial Phrases</a></cite>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
      <QuoteBox />,
        document.getElementById('quote-component')

    );
