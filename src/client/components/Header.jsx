import React from 'react';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from "react-router-dom";
import styled from 'styled-components';

const MenuBar = styled.div`
  display: flex;
  padding: 25px 20px 15px 20px;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: none;
    color: #000000;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #000000;
  font-size: 24px;
  float: right;
`;

const Header = () => (
  <MenuBar>
    <h1>
      <Logo href="/">UW Housing</Logo>
    </h1>
    <Link to="/listing">
      <Icon
        icon="user"
      />
    </Link>

  </MenuBar>
);

export default Header;
