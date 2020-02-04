import React from 'react';
import OptionRow from './OptionRow';

export default class OptionRowContainer extends React.Component {
  constructor({ option, index, deleteOption, updateOption }) {
    super();
    this.state = {

    };

    this.option = option;
    this.deleteThisOption = this.deleteThisOption.bind(this);
    this.deleteOption = deleteOption;
    this.updateValue = this.updateValue.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }

  deleteThisOption() {
    this.deleteOption(this.option);
  }

  updateValue(event) {
    let newValue = event.target.value;
    this.props.updateOption({
      ...this.props.option,
      ...{
        value: newValue,
      }
    });
  }

  updateLabel(event) {
    let newLabel = event.target.value;
    this.props.updateOption({
      ...this.props.option,
      ...{
        label: newLabel,
      }
    });
  }

  render() {
    return (
      <OptionRow
        option={this.props.option}
        index={this.props.index}
        deleteThisOption={this.deleteThisOption}
        updateValue={this.updateValue}
        updateLabel={this.updateLabel} />
    )
  }
}