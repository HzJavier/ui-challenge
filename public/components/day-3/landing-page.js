import React from 'react'

let LandingPage = React.createClass({
  render: function () {
    return (
      <div className="landing-page-wrapper">
        <div className="main-section">

          <div className="menu"></div>
          
          <div className="text-wrapper">
            <div className="title">GO FOR IT</div>
            <div className="subtitle">IMPROVE YOUR RECORD</div>
            <div className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tempor velit.
            </div>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="secondary-section-wrapper">
          <div className="secondary-section left-section"></div>
          <div className="secondary-section right-section"></div>
        </div>
      </div>
    )
  }            
});

export default LandingPage;
