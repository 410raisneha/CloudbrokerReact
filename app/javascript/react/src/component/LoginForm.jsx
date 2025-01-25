// src/component/LoginForm.jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Example submission logic (replace with actual API call)
    const userData = {
      email,
      password,
    };

    console.log('Submitted data:', userData);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-form-container bg-light text-dark shadow-lg p-4" style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
