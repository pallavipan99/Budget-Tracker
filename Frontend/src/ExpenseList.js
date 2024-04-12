import React from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, refresh }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    refresh();
  };

  return (
    <ul className="mb-6">
      {expenses.map(exp => (
        <li key={exp.id} className="flex justify-between border-b py-2">
          <span>{exp.name} - ${exp.amount} ({exp.category})</span>
          <button className="text-red-500" onClick={() => handleDelete(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
