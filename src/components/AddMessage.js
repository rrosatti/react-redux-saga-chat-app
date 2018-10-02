import React, { Component } from 'react';
import PropTypes from 'prop-types';

// constructor(props) {
//   super(props);
//   this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
// }
//
// let input;
//
// handleOnKeyPress(e) {
//   e.preventDefault();
//   if (e.key === 'Enter') {
//     this.props.dispatch(input.value, 'Me');
//     input.value = '';
//   }
// }

const AddMessage = (props) => {
  let input;

  return (
    <section id="new-message">
      <input onKeyPress={e => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me');
          input.value = '';
        }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );

};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage;
