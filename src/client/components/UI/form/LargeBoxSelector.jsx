import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px !important;
  padding: 10px;
  flex: 1 !important;
  border-radius: 5px !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonImage = styled(FontAwesomeIcon)`
  margin: 10px;
`;

class LargeBoxSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      bgColor: "#F0F0F0",
      fontColor: "#000000"
    }
  }

  handleClick = (e) => {
    if(this.state.clicked) {
      this.setState({
        clicked: false,
        bgColor: "#F0F0F0",
        fontColor: "#000000"
      })
    } else {
      this.setState({
        clicked: true,
        bgColor: "#2032a3",
        fontColor: "#ffffff"
      })
    }
  }

  render() {
    return (
      <ButtonBox
        key={this.props.label}
        style={{
          backgroundColor: this.state.bgColor,
          color: this.state.fontColor
        }}
        onClick={this.handleClick}
      >
        <ButtonImage icon={this.props.icon} size="2x" />
        <h3>{this.props.label}</h3>
      </ButtonBox>
    );
  }
}

export default LargeBoxSelector;
