import React, { Component } from "react";
export const ModalContext = React.createContext(false);

export default class ModalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }
  handleOpenStatus = () => {
    console.log("toggle");
    this.setState(!this.state.opened);
  };
  render() {
    return (
      <ModalContext.Provider
        value={{
          opened: this.state.opened,
          toggle: () => {
            console.log("toggle");
            this.setState({ opened: !this.state.opened });
          },
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}
