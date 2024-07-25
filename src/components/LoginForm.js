// src/components/LoginForm.js
import React from 'react';
import '../styles/Modal.css'; // Import CSS for modal styling

const LoginForm = ({ closeModal, openSignUp }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    alert('Successfully logged in!');
    closeModal(); // Optionally close the modal after logging in
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#sign-up" onClick={() => { closeModal(); openSignUp(); }}>Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
