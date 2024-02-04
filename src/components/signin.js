// Signin.js
import React, { useState } from 'react';

const Signin = ({ onSignin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = () => {
    // Simulated user database (replace this with your actual authentication logic)
    const fakeUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      // Add more users as needed
    ];

    // Check if the entered username and password match any user in the database
    const user = fakeUsers.find((user) => user.username === username && user.password === password);

    if (user) {
      // Successful signin
      setError('');
      onSignin(user); // Pass the user data to the parent component or handle the signin logic
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Signin</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Don't have account?<a href=''>Sign</a></p>
    </div>

    
  )
};

export default Signin;
