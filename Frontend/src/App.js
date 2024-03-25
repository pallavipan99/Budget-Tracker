import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import axios from 'axios';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/api/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Budget Tracker</h1>
      <ExpenseForm refresh={fetchExpenses} />
      <ExpenseList expenses={expenses} refresh={fetchExpenses} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default App;
