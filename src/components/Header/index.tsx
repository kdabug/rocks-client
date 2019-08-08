import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";
import React, { FunctionComponent, memo } from "react";

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <h1>DAM ROCKS</h1>
    <Link to="/login">Login</Link>
  </HeaderContainer>
);

export default Header;
