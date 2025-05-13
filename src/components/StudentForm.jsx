import React, { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [program, setProgram] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !program) return;

    onAddStudent({
      id: Date.now(),
      name,
      age: parseInt(age),
      program,
      progress: parseInt(progress)
    });

    setName('');
    setAge('');
    setProgram('');
    setProgress(0);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      />
      <input
        type="number"
        placeholder="Progress %"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}
