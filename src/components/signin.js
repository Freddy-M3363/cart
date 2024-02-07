
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = ({ onSignin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = () => {

    const Users = [
      { username: 'frank', password: '27667663' },
      { username: 'kim', password: '783257' },
    ];

    
    const user = Users.find((user) => user.username === username && user.password === password);

    if (user) {
     
      setError('');
      onSignin(user); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div id='signin'>
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
      <p>Don't have account?<Link to='/signup'>sign up</Link></p>
    </div>

    
  )
};

export default Signin;
