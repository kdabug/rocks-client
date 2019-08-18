import React from "react";
//import "./App.css";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
import { Form } from "./components/Form";

import { Route, Switch } from "react-router-dom";
import { Button } from "./components/Button";
import { tsThisType } from "@babel/types";

interface AppState {
  rockData: [];
  chakraData: [];
  propertyData: [];
  rockName: string;
  properties: [];
  rockUse: string;
  chakra: string;
  rockUrl: string;
  userData: "";
  toggleCreateRock: boolean;
}
class App extends React.Component<{}, AppState> {
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
      userData: null,
      toggleCreateRock: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e: any) {
    e.preventDefault();
  }

  handleChange(e: any): void {
    const { name, value } = e.target;
    this.setState<any>({
      [name]: value
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <main>
          <Button height="100px" width="400px">
            Go
          </Button>
          <Header userName={this.state.userData} />
          <Switch>
            <Route
              path="/add"
              render={props => <Form {...props} renderForm={"addRock"} />}
            />
            <Route
              path="/edit/:id"
              render={props => <Form {...props} renderForm={"editRock"} />}
            />
            <Route
              path="/login"
              render={props => <Form {...props} renderForm={"login"} />}
            />
            <Route
              path="/logout"
              render={props => <Form {...props} renderForm={"logout"} />}
            />
            <Route
              path="/register"
              render={props => <Form {...props} renderForm={"register"} />}
            />
            {/* <Route
              path="/user-profile"
              rendeer={props => <UserProfile {...props} userName={userName} />}
            /> */}
          </Switch>
          {/* <Footer userName={this.state.userName} /> */}
        </main>
      </div>
    );
  }
}

export default App;
