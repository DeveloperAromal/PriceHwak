
import React, { useState } from 'react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get form values
    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setSuccessMessage('');

 
  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" required />
      </label>
      <button disabled={loading} type="submit">
        Send message!
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
