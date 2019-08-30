import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";
import React, { FunctionComponent, memo } from "react";

interface Props {
  userName: string;
}

const Header: FunctionComponent<Props> = ({ userName }) => (
  <HeaderContainer>
    <h1>DAM ROCKS</h1>
    <Link to="/add">addRock</Link>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </HeaderContainer>
);

export default Header;
