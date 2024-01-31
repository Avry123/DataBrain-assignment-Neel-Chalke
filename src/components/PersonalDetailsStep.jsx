// PersonalDetailsForm.jsx
import React, { useState } from 'react';
import '../assets/FormStyling.css';

const PersonalDetailsForm = ({ onNext, formData }) => {
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+$/i.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onNext({ name, email });
    }
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <h2>Personal Details</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalDetailsForm;
