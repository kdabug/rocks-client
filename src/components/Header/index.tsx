import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";
import React, { FunctionComponent, memo } from "react";

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Link to="/login">Login</Link>
  </HeaderContainer>
);

export default Header;
