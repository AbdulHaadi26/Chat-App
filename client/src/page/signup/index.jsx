import React, { useState } from 'react';
import CustomInput from '../../components/customInputForms';
import './style.css';

export default () => {
  const [form, setForm] = useState({
    name: '', email: '', password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="row registration-wrapper">
      <div className="col-lg-6 col-12">
        <h1>Create your account now</h1>
        <p>
          Create an account with spoty and chat with unlimited friends free of cost.
        </p>
        <form>
          <CustomInput type="text" value={form.name} placeholder="Name" name="name" handleInput={handleInput} />
          <CustomInput type="email" value={form.email} placeholder="Email" name="email" handleInput={handleInput} />
          <CustomInput type="password" value={form.password} placeholder="Password" name="password" handleInput={handleInput} />
        </form>
      </div>
    </div>
  );
};
