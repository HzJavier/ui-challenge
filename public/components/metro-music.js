var MetroMusicLogin = React.createClass({
  render: function () {
    return (
      <div className="metro-music-login">
        <div className="title">
          Metro Music
        </div>

        <button className="facebook-btn">SIGN UP WITH FACEBOOK</button>
        <span>OR</span>
        <button className="create-btn">CREATE ACCOUNT</button>

        <form>
          <input type="text" name="username" placeholder="Username"></input>
          <input type="text" name="email" placeholder="E-mail"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <button className="sign-up-btn">SIGN UP</button>
        </form>

        <div className="disclaimer">
          To Sign Up you must agree to our Terms of Service and Privacy Policy
        </div>

      </div>
    )
  }
});
