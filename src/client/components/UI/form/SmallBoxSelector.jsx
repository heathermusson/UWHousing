import React, { Component } from 'react';
import SubLabel from './SubLabel.jsx';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  height: 40px;
  margin: 5px !important;
  flex: 1 !important;
  border-radius: 5px !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class SmallBoxSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      bgColor: "#F0F0F0",
      fontColor: "#000000"
    }
  }

  handleClick = () => {
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
    const { label } = this.props;
    const { bgColor, fontColor } = this.state;

    return (
      <ButtonBox
        key={label}
        style={{
          backgroundColor: bgColor,
          color: fontColor
        }}
        onClick={this.handleClick}
      >
        {label}
      </ButtonBox>
    );
  }
}

export default SmallBoxSelector;
