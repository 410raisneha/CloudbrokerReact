// app/javascript/react/src/component/Welcome.jsx
import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Welcome = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavbarBrand href="#home">My App</NavbarBrand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <h1 className="mt-4">Welcome to the App!</h1>
        {/* Add more content or components here */}
        <p>This is a simple starter page for your application.</p>
      </Container>
    </>
  );
};

export default Welcome;
