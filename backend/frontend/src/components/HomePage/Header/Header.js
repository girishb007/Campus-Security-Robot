import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: this.props.userDetails,
      loggedIn: this.props.loggedIn
    };
  }
  logout = () => {
    console.log("inside logout");
    this.props.logOut(!this.state.loggedIn);
  };
  componentDidUpdate(prevProps)
  {
    if(prevProps.userDetails!==this.props.userDetails)
    {
      const userDetails=this.props.userDetails;
      this.setState({
        userDetails:userDetails
      })
    }
  }
  render() {

    return (
      <div className="header">
        <div className="headerContainer">
          <div className="left-side-header">
            {/* <img
              height="60px"
              width="230px"
              className="login-img"
              alt="kube"
              src={landing}
            /> */}
            {/* <span className="headerName" ><b>&nbsp;&nbsp;Savvy K8s</b>
           </span> */}
          </div>
          <div className="center-area-header">
            <section style={{float:'right'}}>
                <b className="mr-3" style={{ color: 'white' }}><i style={{'font-size': '3rem'}} className="mt-3 fa fa-user fa-fw"></i> {this.state.userDetails.custName}</b>
                <button className=" btn btn-info btn-md mr-3 mb-2 login" onClick={this.logout}>
                  Log out
                </button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
