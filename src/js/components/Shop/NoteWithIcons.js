import React, { Component }  from 'react';

class NotesWithIcons extends Component {
    render() {
      return (
        <div className="notesWithIcons">
          <div>
            <i className="fas fa-undo"></i>
            <h2>30 Days To Return</h2>
            <p>
              You have 30 days to return the product from the day you purchased it
            </p>
          </div>
          <div>
            <i className="fas fa-shipping-fast"></i>
            <h2>Fast Shipping</h2>
            <p>You wait maximum 7 days for your product</p>
          </div>
          <div>
            <i className="far fa-handshake"></i>
            <h2>Guarantee Of Quality</h2>
            <p>We have products of the highest quality from the best producers</p>
          </div>
        </div>
      );
    }
  }

export default NotesWithIcons