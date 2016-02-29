var QuoteBox = React.createClass({
  getInitialState: function() {
    return {
      proverb: "Don't panic!"
    };
  },

  componentDidMount: function() {
    this.getProverb();
  },

  getProverb: function() {
    return $.get(this.props.source, function(result) {
      this.setState({
        proverb: result.proverb
      });
    }.bind(this));
  },

  handleClick: function() {

  },

  render: function() {
    return (
      <div className="quote-wrap quote-box">
        <div className="quote-thumb"></div>
        <blockquote cite="https://www.gutenberg.org/ebooks/39281"><p>{this.state.proverb}</p></blockquote>
        <div className="row">
          <div className="col-md-2">
            <button onClick={this.handleClick} className="pull-left btn btn-warning new_quote">New Quote</button>
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
      <QuoteBox source="http://localhost:8080/api/proverb"/>,
        document.getElementById('quote-component')
);
