import React from 'react';
import GameEditor from './GameEditor';
import Modal from 'react-modal';

export default class GameEditorContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gameObject: props.gameObject ? props.gameObject : { name: props.name },
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        openModal={this.openModal} />
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
    )
  }
}