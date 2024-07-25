// src/components/SignInForm.js
import React from 'react';
import '../styles/Modal.css'; // Import CSS for modal styling

const SignInForm = ({ closeModal, openLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    alert('You have signed in successfully!');
    closeModal(); // Optionally close the modal after sign in
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create account</button>
          <label>
            <input type="checkbox" required />
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </form>
        <p>Already have an account? <a href="#login" onClick={() => { closeModal(); openLogin(); }}>Login here</a></p>
      </div>
    </div>
  );
};

export default SignInForm;
