import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import './styles/global.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <StudentForm onAddStudent={handleAddStudent} />
        <StudentTable students={students} />
      </main>
    </>
  );
}

export default App;
