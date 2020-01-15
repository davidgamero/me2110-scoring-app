import React from 'react';
import OptionRow from './OptionRow';

export default class OptionRowContainer extends React.Component {
  constructor({ option, index, deleteOption }) {
    super();
    this.state = {

    };

    this.option = option;
    this.deleteThisOption = this.deleteThisOption.bind(this);
    this.deleteOption = deleteOption;
  }

  deleteThisOption() {
    this.deleteOption(this.option);
  }

  render() {
    return (
      <OptionRow
        option={this.props.option}
        index={this.props.index}
        deleteThisOption={this.deleteThisOption} />
    )
  }
}