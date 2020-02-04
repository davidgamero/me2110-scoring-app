import React from 'react';
import ElementEdit from './ElementEdit';

export default class ElementEditContainer extends React.Component {
  constructor({ gameElement, updateGameElement, removeGameElement }) {
    super();
    this.state = {

    };

    this.updateGameElement = updateGameElement;
    this.removeGameElement = removeGameElement;
    this.updateGameElementName = this.updateGameElementName.bind(this);
    this.updateGameElementField = this.updateGameElementField.bind(this);
  }

  updateGameElementName(event) {
    let fieldName = 'name';
    let value = event.target.value;

    this.updateGameElementField(fieldName, value);
  }

  updateGameElementField(fieldName, value) {
    let updateFieldObject = {};
    updateFieldObject[fieldName] = value;
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
        updateGameElementName={this.updateGameElementName}
        updateGameElementField={this.updateGameElementField}
        removeGameElement={this.removeThisElement} />
    )
  }
}