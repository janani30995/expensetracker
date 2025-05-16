import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import DashboardChart from '../../components/DashboardChart';

const ManagerDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const allExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // Optional: Filter data for current month
  const thisMonthExpenses = allExpenses.filter(exp => {
    const expenseDate = new Date(exp.date);
    const now = new Date();
    return (
      expenseDate.getMonth() === now.getMonth() &&
      expenseDate.getFullYear() === now.getFullYear()
    );
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar role={user.role} />

      {/* Main content on the right */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold mb-4">Manager: {user.username}</h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-600">Expenses This Month</p>
              <h2 className="text-xl font-semibold text-blue-700">₹32,000</h2>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-600">Team Budget Utilized</p>
              <h2 className="text-xl font-semibold text-green-600">48%</h2>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-600">Bills Pending Approval</p>
              <h2 className="text-xl font-semibold text-red-600">4</h2>
            </div>
          </div>

          {/* Chart */}
          <DashboardChart expenses={thisMonthExpenses} />
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;