// MultiStepForm.js
import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsStep'; // Updated import
import PaymentDetailsForm from './PaymentDetailsStep';
import '../assets/FormStyling.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', // Initialize with default values or empty strings
    email: '',
    cardNumber: '',
    expirationDate: '',
  });

  const onNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const onPrevStep = () => setStep(step - 1);

  return (
    <>
      <h1>Multi-Step Form</h1>
      <div className="container">
        {step === 1 && <PersonalDetailsForm onNext={onNextStep} formData={formData} />} {/* Pass formData */}
        {step === 2 && <PaymentDetailsForm onSubmit={onSubmit} onPrev={onPrevStep} />}
        {step === 3 && (
          <div>
            <h2>Details Showcase</h2>
            <div>
              <strong>Personal Details:</strong>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
            </div>
            <div>
              <strong>Payment Details:</strong>
              <p>Card Number: {formData.cardNumber}</p>
              <p>Expiration Date: {formData.expirationDate}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultiStepForm;
