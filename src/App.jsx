import React from 'react';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h2>Welcome to the Dashboard</h2>
        {/* We’ll add student form and table here later */}
      </main>
    </>
  );
}

export default App;
