import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileType, setProfileType] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfileTypeChange = (event) => {
    setProfileType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your authentication API here and pass email, password, and profileType
    // Redirect user to the appropriate profile page based on profileType
    if (profileType === 'freelancer') {
      history.push('/freelancer-profile');
    } else if (profileType === 'employee') {
      history.push('/employee-profile');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="profile-type">Profile Type</label>
          <select id="profile-type" value={profileType} onChange={handleProfileTypeChange}>
            <option value="">Select Profile Type</option>
            <option value="freelancer">Freelancer</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;