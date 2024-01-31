import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddressStep = ({ onNext, onPrev }) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2: Address</h2>
      <div>
        <label>Street:</label>
        <Controller
          as={<input />}
          name="street"
          control={control}
          rules={{ required: 'Street is required' }}
        />
        {errors.street && <span>{errors.street.message}</span>}
      </div>
      <div>
        <label>City:</label>
        <Controller
          as={<input />}
          name="city"
          control={control}
          rules={{ required: 'City is required' }}
        />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AddressStep;
