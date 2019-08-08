import { Component } from "react";
import ReactDOM from "react-dom";

const portal = document.createElement("div");
portal.id = "portal";
document.body.appendChild(portal);
const portalRoot = document.getElementById("portal");
const el = document.createElement("div");

export default class Portal extends Component<{ children: any }> {
  componentDidMount() {
    portalRoot.appendChild(el);
  }
  componentWillUnmount() {
    portalRoot.removeChild(el);
  }
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, portalRoot);
  }
}
