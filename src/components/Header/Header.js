import React from "react";
import "./Header.css";
import "./HeaderTop.css";
import "./HeaderMiddle.css";
// import HeaderTop from './HeaderTop';
// import HeaderMiddle from './HeaderMiddle';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
    };
  }
  inputChange = (event) => {
    this.setState({ word: event.target.value.toLowerCase() });
  };
  onbuttonclick = () => {
    this.props.onSearchRouteChange(this.state.word);
  };

  render() {
    return (
      <div>
        {/* <div className='header_top'>
        <p>Welcome name</p>
        <div className='header_top_panel'>
            <p onClick={()=>{this.props.onPageRouteChange('signinPage')}}>signin</p>
        </div>
    </div> */}

        <div className="header_middle">
          <div className="header_middle_panel">
            <div className="logo">LOGO</div>

            <div className="header_middle_search">
              <input
                type="text"
                placeholder="Enter your search"
                onChange={this.inputChange}
              ></input>
              <button onClick={this.onbuttonclick}>GO</button>
            </div>
            <p className="header_middle_call">
              <span>CALL US</span> <span>xxxx-xxx-xxx</span>
            </p>
            {/* <p className='header_middle_signin' onClick={()=>{this.props.onPageRouteChange('signinPage')}}>Signin</p> */}
          </div>
        </div>

        <div className="header_bottom">
          <div className="header_bottom_panel_1">
            <p
              onClick={() => {
                this.props.onPageRouteChange("mainPage");
              }}
            >
              HOME
            </p>
            <p
              onClick={() => {
                this.props.onPageRouteChange("aboutPage");
              }}
            >
              ABOUT US
            </p>
            <p
              onClick={() => {
                this.props.onPageRouteChange("contactPage");
              }}
            >
              CONTACT US
            </p>
          </div>
          <div className="header_bottom_panel_2">
            <p
              onClick={() => {
                this.props.onPageRouteChange("cartPage");
              }}
            >
              MY CART
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
