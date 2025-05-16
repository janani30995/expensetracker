import Sidebar from '../../components/Sidebar';

const ManagerApprovals = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  const pending = expenses.filter(exp => !exp.approved);

  const approveExpense = (index) => {
    expenses[index].approved = true;
    localStorage.setItem('expenses', JSON.stringify(expenses));
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user.role} />
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Pending Expense Approvals</h2>
        {pending.length === 0 ? (
          <p>No pending expenses</p>
        ) : (
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Employee</th>
                <th className="p-2">Title</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pending.map((exp, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{exp.username}</td>
                  <td className="p-2">{exp.title}</td>
                  <td className="p-2">₹{exp.amount}</td>
                  <td className="p-2">{exp.date}</td>
                  <td className="p-2">
                    <button
                      onClick={() => approveExpense(i)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default ManagerApprovals;
