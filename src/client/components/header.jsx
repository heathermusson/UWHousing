import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const MenuBar = styled.div`
  display: flex;
  padding: 25px 20px 15px 20px;
  justify-content: space-between;
  align-items: center;
`;

const ProfileLink = styled.a`
  height: 100%;
  width: 32px;
  height: 32px;
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

const handleSelect = eventKey => alert(`selected ${eventKey}`);

class Header extends Component {

  render() {
    return (
      <MenuBar>
        <h1>
          <Logo href="/">UW Housing</Logo>
        </h1>
        <ProfileLink href="/listing">
          <Icon
            icon="home"
            styles
          />
        </ProfileLink>

      </MenuBar>
    )
  }
}

export default Header;
