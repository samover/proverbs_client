var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <p className="text-center">
          Created by Samuel Overloop &copy; 2016.&nbsp;
          Powered by&nbsp;
          <a href="https://github.com/samover/proverbs_ap_api">proverbs.api</a>
        </p>
        <p className="text-center">
          <i className="fa fa-github"></i>
          <a href="https://github.com/samover"> samover</a>
        </p>
      </div>
    )
  }
});

ReactDOM.render(
      <Footer />,
        document.getElementById('footer-component')
);
