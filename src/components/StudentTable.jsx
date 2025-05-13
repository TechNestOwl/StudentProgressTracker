import React from 'react';
import '../styles/StudentTable.css';

export default function StudentTable({ students }) {
  if (students.length === 0) {
    return <p>No students added yet.</p>;
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Program</th>
          <th>Progress (%)</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.program}</td>
            <td>{student.progress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
