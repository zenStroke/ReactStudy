class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "今日は",
      this.props.name
    );
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Kazuya" }), document.getElementById('hello-example'));
