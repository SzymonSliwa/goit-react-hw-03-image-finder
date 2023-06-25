import propTypes from 'prop-types';
import React, { Component } from 'react';

export class Modal extends Component {
  state = {};

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image, description } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={image} alt={description} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: propTypes.func.isRequired,
};
