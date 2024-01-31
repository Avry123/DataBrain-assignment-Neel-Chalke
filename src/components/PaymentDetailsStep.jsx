// PaymentDetailsForm.jsx
import React, { useState } from 'react';
import '../assets/FormStyling.css';

const PaymentDetailsForm = ({ onSubmit, onPrev }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!cardNumber.trim()) {
      newErrors.cardNumber = 'Card Number is required';
    }

    if (!expirationDate.trim()) {
      newErrors.expirationDate = 'Expiration Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({ cardNumber, expirationDate });
    }
  };

  return (
    <form className="container" onSubmit={submitForm}>
      <h2>Payment Details</h2>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        {errors.cardNumber && <span>{errors.cardNumber}</span>}
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="text"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        {errors.expirationDate && <span>{errors.expirationDate}</span>}
      </div>
      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentDetailsForm;
