
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

    try {
      // Send form data to API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });

      setLoading(false);
      setSuccessMessage('Thank you for contacting us!');

      // Reset the form values after successful submission
      form.reset();
    } catch (err) {
      console.error(err);
      alert('An error occurred while sending your message...');
      setLoading(false);
    }
  };

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
