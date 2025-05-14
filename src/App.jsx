import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import FilterMenu from './components/FilterMenu';
import './styles/global.css';

function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  // Get unique list of programs
  const programs = [...new Set(students.map((s) => s.program))];

  // Apply filter
  const filteredStudents = filter
    ? students.filter((s) => s.program === filter)
    : students;

  return (
    <>
      <Navbar />
      <main className="container">
        <StudentForm onAddStudent={handleAddStudent} />
        <FilterMenu
          filter={filter}
          setFilter={setFilter}
          programs={programs}
        />
        <StudentTable students={filteredStudents} setStudents={setStudents} />
      </main>
    </>
  );
}

export default App;
