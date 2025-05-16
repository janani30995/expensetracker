
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import DashboardChart from '../../components/DashboardChart';

const EmployeeDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const myExpenses = expenses.filter(e => e.username === user.username);

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user.role} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">This Month's Expenses: ₹12,500</div>
            <div className="bg-white p-4 rounded shadow">Budget Utilized: 62%</div>
            <div className="bg-white p-4 rounded shadow">Pending Approvals: 1</div>
          </div>
          <DashboardChart expenses={myExpenses} />
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;