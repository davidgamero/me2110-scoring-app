import React from 'react';
import ElementEdit from './ElementEdit';

export default class ElementEditContainer extends React.Component {
  constructor({ gameElement, updateGameElement }) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <ElementEdit
        gameElement={this.props.gameElement}
        updateGameElement={this.props.updateGameElement} />
    )
  }
}