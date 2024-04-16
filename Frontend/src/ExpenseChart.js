import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const categories = [...new Set(expenses.map(e => e.category))];
  const amounts = categories.map(cat => 
    expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [{
      label: 'Expenses by Category',
      data: amounts,
      backgroundColor: ['#f87171','#60a5fa','#34d399','#fbbf24','#a78bfa','#f472b6'],
    }]
  };

  return <div className="max-w-sm mx-auto"><Pie data={data} /></div>;
};

export default ExpenseChart;
