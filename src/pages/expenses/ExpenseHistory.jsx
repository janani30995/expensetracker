import Sidebar from '../../components/Sidebar';

const ExpenseHistory = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const userExpenses = expenses.filter(e => e.username === user.username);

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user.role} />
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Expense History</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Title</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {userExpenses.map((exp, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{exp.title}</td>
                <td className="p-2">₹{exp.amount}</td>
                <td className="p-2">{exp.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ExpenseHistory;