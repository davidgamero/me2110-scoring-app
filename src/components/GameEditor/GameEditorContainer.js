import React from 'react';
import GameEditor from './GameEditor';

export default class GameEditorContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gameObject: props.gameObject ? props.gameObject : {
        name: props.name,
        gameElements: [
          {
            key: Date.now(),
            type: 'points',
            name: 'The Girls',
            options: [
              {
                label: 'Zone 1',
                value: '10',
                key: 10000000,
              },
              {
                label: 'Zone 2',
                value: '25',
                key: 20000000,
              }
            ]
          }
        ]
      },
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addGameElement = this.addGameElement.bind(this);
    this.updateGameElement = this.updateGameElement.bind(this);
    this.removeGameElement = this.removeGameElement.bind(this);
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
    //console.log('new Element=' + JSON.stringify(newElement));
    //console.log('oldgameObject=' + JSON.stringify(oldGameObject));
    let newGameObject = oldGameObject;
    newGameObject.gameElements.push(newElement);
    //console.log('newgameObject=' + JSON.stringify(newGameObject));
    this.setState({
      gameObject: newGameObject,
    });
    return;
  }

  updateGameElement(updatedElement) {
    let oldGameObject = this.state.gameObject;
    let oldElements = oldGameObject.gameElements;
    let newElements = oldElements;

    newElements.forEach((e, i) => {
      if (e.key === updatedElement.key) {
        // Shallow merge to update new fields and preserve existing
        newElements[i] = { ...oldElements[i], ...updatedElement };
      }
    });

    let newGameObject = oldGameObject;
    newGameObject.gameElements = newElements;

    this.setState({
      gameObject: newGameObject,
    });

    console.log(newGameObject);
  }

  removeGameElement(gameElement) {
    let oldGameObject = this.state.gameObject;
    let oldElements = oldGameObject.gameElements;
    let newElements = oldElements;

    newElements = newElements.filter((e) => e.key !== gameElement.key);

    let newGameObject = oldGameObject;
    newGameObject.gameElements = newElements;

    this.setState({
      gameObject: newGameObject,
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
    //console.log(this.state.gameObject);
    return (<div>
      <GameEditor
        gameObject={this.state.gameObject}
        openModal={this.openModal}
        addGameElement={this.addGameElement}
        updateGameElement={this.updateGameElement}
        removeGameElement={this.removeGameElement} />
    </div >
    )
  }
}