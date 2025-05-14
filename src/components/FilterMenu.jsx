import React from 'react';
import '../styles/FilterMenu.css';

export default function FilterMenu({ filter, setFilter, programs }) {
  return (
    <div className="filter-menu">
      <label htmlFor="program-filter">Filter by Program:</label>
      <select
        id="program-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Programs</option>
        {programs.map((program, index) => (
          <option key={index} value={program}>
            {program}
          </option>
        ))}
      </select>
      {filter && (
        <button onClick={() => setFilter('')} className="clear-btn">
          Clear
        </button>
      )}
    </div>
  );
}
