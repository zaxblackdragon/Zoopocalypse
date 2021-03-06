import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";
import API from "../utils/API";
import { Redirect } from "react-router";

class Play extends Component {
  // make an api request for which animal is being played

  state = {
    name: window.location.pathname.split("/")[2].toLowerCase(),
    hint: "",
    userLogInStatus: false
  };

  //  Give this component a state with { loggedOut: false }
  //  inside the API promise, setState to { loggedOut: true }
  //  In the Render thing, created a check thing to render a Redirect if this.state.loggedOut

  userSignOut = () => {
    API.userSignOut().then(res => {
      console.log("did we log out?" + res.data.success);
      if (res.data.success) {
        this.setState({ userLogInStatus: true });
      }
    });
  };

  //need a componentwillmount to get user data
  //API.function()togetdata

  render() {
    return (
      <div className="Site">
        {this.state.userLogInStatus ? (
          <Redirect to="/" />
        ) : (
          <div className="Site-content">
            {/* Header */}
            <div className="App-header">
              <Header />
            </div>

            {/* Main Game Card contents goes below: */}
            <div className="main">
              <button onClick={this.userSignOut}> LOGOUT</button>
              <AnimalCard animal={this.state.name} hint={this.state.hint} />
            </div>

            {/* Footer */}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Play;
