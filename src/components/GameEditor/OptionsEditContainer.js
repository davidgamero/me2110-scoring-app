import React from 'react';
import OptionsEdit from './OptionsEdit';
import { boundMethod } from 'autobind-decorator';

export default class OptionsEditContainer extends React.Component {
  constructor({ gameElement, updateGameElementField }) {
    super();

    //this.gameElement = gameElement;
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.updateOption = this.updateOption.bind(this);
  }

  addOption() {
    let options = this.props.gameElement.options;

    let newOptionToAdd = {
      label: '',
      value: '',
      key: Date.now(),
    };

    options.push(newOptionToAdd);

    let fieldToUpdate = 'field';
    this.props.updateGameElementField(fieldToUpdate, options);
  }

  deleteOption(optionToDelete) {
    let options = this.props.gameElement.options;

    let newOptions = options.filter((e) => e.key !== optionToDelete.key);

    let fieldToUpdate = 'options';
    this.props.updateGameElementField(fieldToUpdate, newOptions);
  }

  updateOption(optionToUpdate) {
    let oldOptions = this.props.gameElement.options;
    let newOptions = oldOptions;

    oldOptions.forEach((e, i) => {
      if (e.key === optionToUpdate.key) {
        newOptions[i] = { ...oldOptions[i], ...optionToUpdate }
      }
    });


    let fieldToUpdate = 'options';
    this.props.updateGameElementField(fieldToUpdate, newOptions);
  }

  render() {
    return <OptionsEdit
      gameElement={this.props.gameElement}
      addOption={this.addOption}
      deleteOption={this.deleteOption}
      updateOption={this.updateOption} />
  }
}