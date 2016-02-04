var HelloMessage = React.createClass({
  onMenuClick: function () {
    ReactDOM.render(<MetroMusicLogin/>, document.getElementById('main'));   
  },
  render: function () {
    return (
      <div>
        Daily UI challenges, by Vania Vega 

        <ul>
          <li
            onClick={this.onMenuClick}>
            Day 1 - Metro Music
          </li>
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('main'));

var j
