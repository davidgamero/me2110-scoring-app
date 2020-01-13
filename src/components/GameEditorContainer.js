import React from 'react';
import GameEditor from './GameEditor';
import Modal from 'react-modal';

export default class GameEditorContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gameObject: props.gameObject ? props.gameObject : {
        name: props.name,
        gameElements: [
          {
            key: 0,
            type: 'points',
            name: 'The Girls'
          }
        ]
      },
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addGameElement = this.addGameElement.bind(this);
  }

  addGameElement(type) {
    let newElement = { key: Date.now(), type: type }
    let oldGameObject = this.state.gameObject;
    switch (type) {
      case 'points':
        newElement.name = 'Points Element';
        newElement.options = [
          {
            label: 'Option1',
            points: 1,
          },
          {
            label: 'Option2',
            points: 2,
          }
        ];
        break;
      case 'multiplier':
        newElement.name = 'Multiplier Element';
        newElement.multipliedElements = [];
        newElement.options = [
          {
            label: 'Option1',
            multiplier: 1,
          },
          {
            label: 'Option2',
            multiplier: 2,
          }
        ];
        break;
      default:
        throw ('Invalid game element type creation request');
    };
    console.log('new Element=' + JSON.stringify(newElement));
    console.log('oldgameObject=' + JSON.stringify(oldGameObject));
    let newGameObject = oldGameObject;
    newGameObject.gameElements.push(newElement);
    console.log('newgameObject=' + JSON.stringify(newGameObject));
    this.setState({
      gameObject: newGameObject,
    });
    return;
  }

  updateGameElement(newElement) {
    let oldElements = this.state.gameObject.gameElements

    oldElements.forEach((e, i) => {
      if (e.name === newElement.name) {
        oldElements[i] = newElement;
      }
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this.state.gameObject);
    return (<div>
      <GameEditor
        gameObject={this.state.gameObject}
        openModal={this.openModal}
        addGameElement={this.addGameElement} />
    </div >
    )
  }
}