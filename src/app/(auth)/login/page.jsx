"use client"
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-100vh py-20">
      <div className="border rounded-md shadow-xl lg:w-1/3 w-2/3 items-center justify-center flex flex-col py-10">
        <div className="text-center mb-8">
          <h1 className="text-blue-60 regular-30 mb-1">Welcome back!</h1>
          <div className="border-2 w-12 inline-block border-blue-60 mb-2" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="mb-1 items-start text-blue-60 bold-14">Email</label>
            <div className="pb-2 w-72">
              <input type="email" id="email" name="email" placeholder="Your email" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="mb-1 items-start text-blue-60 bold-14">Password</label>
            <div className="pb-2 w-72">
              <input type="password" id="password" name="password" placeholder="Your password" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="ml-14">
          <Button type="submit" title="Log in" variant="btn_dark_green_shadow" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

