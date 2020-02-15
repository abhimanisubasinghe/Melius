import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import React from 'react';
 
class Test extends React.Component {
  submit = () => {
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  this.handleClickDelete();
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          );
        }
      });
  };
 
  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Confirm dialog</button>
      </div>
    );
  }
}

export default Test;