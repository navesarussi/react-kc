import React from 'react';
import axios from 'axios';

const LoginPage = () => {
  const handleGitHubLogin = () => {
    // Redirect the user to the GitHub login page
    window.location.href = 'http://localhost:3001/auth/github';
  };

  return (
    <div className="login-page">
      <h1>Welcome to MyApp</h1>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
};

export default LoginPage;
