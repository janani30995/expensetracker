
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const SubmitExpense = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [expense, setExpense] = useState({ title: '', amount: '', date: '' });

  const handleSubmit = e => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('expenses')) || [];
    const updated = [...existing, { ...expense, username: user.username }];
    localStorage.setItem('expenses', JSON.stringify(updated));
    alert('Expense submitted!');
    setExpense({ title: '', amount: '', date: '' });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user.role} />
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Submit New Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Title"
            value={expense.title}
            onChange={e => setExpense({ ...expense, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={expense.amount}
            onChange={e => setExpense({ ...expense, amount: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            value={expense.date}
            onChange={e => setExpense({ ...expense, date: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default SubmitExpense;
