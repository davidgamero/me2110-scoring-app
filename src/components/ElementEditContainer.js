import React from 'react';
import ElementEdit from './ElementEdit';

export default class ElementEditContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  render() {
    <ElementEdit gameElement={this.props.gameElement} />
  }
}

export default ElementEditContainer;