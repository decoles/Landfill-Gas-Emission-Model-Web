import React, { useState } from 'react';
import axios from 'axios';

function SignInForm() {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/react/', {
        user_id,
        password,
      });

      //console.log('Sign-in successful:', response.data);
      // You can handle success here, such as redirecting the user or showing a success message.
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle error, like displaying an error message to the user.
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="user_id">User ID:</label>
          <input
            type="text"
            id="user_id"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;