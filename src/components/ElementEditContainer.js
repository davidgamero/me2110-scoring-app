import React from 'react';
import ElementEdit from './ElementEdit';

export default class ElementEditContainer extends React.Component {
  constructor({ gameElement, updateGameElement, removeGameElement }) {
    super();
    this.state = {

    };

    this.updateGameElement = updateGameElement;
    this.removeGameElement = removeGameElement;
    this.updateGameElementField = this.updateGameElementField.bind(this);
  }

  updateGameElementField(event) {
    let field = event.target.name;
    let value = event.target.value;
    let updateFieldObject = {};
    updateFieldObject[field] = value;
    this.updateGameElement(
      { ...this.props.gameElement, ...updateFieldObject }
    );
  }

  removeThisElement = () => {
    this.removeGameElement(this.props.gameElement);
  }

  render() {
    return (
      <ElementEdit
        gameElement={this.props.gameElement}
        //updateGameElement={this.props.updateGameElement}
        updateGameElementField={this.updateGameElementField}
        removeGameElement={this.removeThisElement} />
    )
  }
}