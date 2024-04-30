"use client"
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          role: 'user',
        }),
      });

      if (!response.ok) {
        throw new Error('Error creating user');
      }

      const data = await response.json();
      console.log(data);

      history.push('/addPInfo');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-100vh py-20">
      <div className="border rounded-md shadow-xl lg:w-2/3 w-2/3 items-center justify-center flex flex-col py-10">
        <div className="text-center mb-8">
          <h1 className="text-blue-60 regular-30 mb-1">Create an account</h1>
          <div className="border-2 w-12 inline-block border-blue-60 mb-2" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:grid gap-5">
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="mb-1 items-start text-green-60 bold-14">Email</label>
              <div className="pb-2 w-72">
                <input type="email" name="email" placeholder="Your email" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="password" className="mb-1 items-start text-green-60 bold-14">Password</label>
              <div className="pb-2 w-72">
                <input type="password" name="password" placeholder="Your password" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="confirmPassword" className="mb-1 items-start text-green-60 bold-14">Confirm Password</label>
              <div className="pb-2 w-72">
                <input type="password" name="confirmPassword" placeholder="Password" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="ml-12">
          <Button type="submit" title="Submit" variant="btn_dark_green_shadow" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
