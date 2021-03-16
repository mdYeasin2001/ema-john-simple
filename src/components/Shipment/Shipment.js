import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} placeholder="Name"/>
      {errors.name && <span className="error">Name is required</span>}
      
      <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Email"/>
      {errors.email && <span className="error">Email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder="Address"/>
      {errors.address && <span className="error">Address is required</span>}
      
      <input name="phone" ref={register({ required: true })} placeholder="Phone"/>
      {errors.phone && <span className="error">Phone is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;