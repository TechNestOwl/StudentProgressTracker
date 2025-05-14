import React, { useState } from 'react';
import '../styles/StudentTable.css';

export default function StudentTable({ students, setStudents }) {
  const [editingId, setEditingId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    name: '',
    age: '',
    program: '',
    progress: ''
  });

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const handleEditClick = (student) => {
    setEditingId(student.id);
    setEditedStudent({ ...student });
  };

  const handleSave = () => {
    setStudents((prev) =>
      prev.map((s) => (s.id === editingId ? { ...editedStudent } : s))
    );
    setEditingId(null);
  };

  return students.length === 0 ? (
    <p>No students added yet.</p>
  ) : (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Program</th>
          <th>Progress (%)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) =>
          editingId === student.id ? (
            <tr key={student.id}>
              <td>
                <input
                  value={editedStudent.name}
                  onChange={(e) =>
                    setEditedStudent({ ...editedStudent, name: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={editedStudent.age}
                  onChange={(e) =>
                    setEditedStudent({ ...editedStudent, age: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  value={editedStudent.program}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      program: e.target.value
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={editedStudent.progress}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      progress: e.target.value
                    })
                  }
                />
              </td>
              <td>
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.program}</td>
              <td>{student.progress}</td>
              <td>
                <button onClick={() => handleEditClick(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
