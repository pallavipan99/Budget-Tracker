import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ refresh }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;
    await axios.post('http://localhost:5000/api/expenses', { name, amount, category });
    setName(''); setAmount(''); setCategory('');
    refresh();
  };

  return (
    <form className="mb-4 flex gap-2" onSubmit={handleSubmit}>
      <input className="border p-2 flex-1" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="border p-2 w-24" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input className="border p-2 w-32" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
