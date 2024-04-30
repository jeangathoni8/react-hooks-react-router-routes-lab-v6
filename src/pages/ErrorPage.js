// Import React and NavBar component
import React from 'react';
import NavBar from '../components/NavBar'; // Adjust the path as necessary

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar /> {/* Include the NavBar for consistent navigation */}
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </>
  );
}

export default ErrorPage;
