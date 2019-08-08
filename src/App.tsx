import React from "react";
//import "./App.css";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";

import { Route, Switch } from "react-router-dom";
import { Button } from "./components/Button";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      rockData: [],
      chakraData: [],
      propertyData: [],
      rockName: "",
      properties: [],
      rockUse: "",
      chakra: "",
      rockUrl: "",
      userData: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    //console.log("THIS IS HANDLE SUBMIT STATE", this.state);
    // this.setState(prevState => ({
    //   // tweedrData: prevState.tweedrData.push(this.state.formQuery)
    // }));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          hello world
          <Header />
          <Button height="100px" width="400px">
            Go
          </Button>
          {/* <Header userName={this.state.userName} />
          <Switch>
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/logout" render={props => <Logout {...props} />} />
            <Route path="/login" render={props => <Register {...props} />} />
            <Route
              path="/user-profile"
              rendeer={props => <UserProfile {...props} userName={userName} />}
            />
          </Switch>
          <Footer userName={this.state.userName} /> */}
        </main>
      </div>
    );
  }
}

export default App;
