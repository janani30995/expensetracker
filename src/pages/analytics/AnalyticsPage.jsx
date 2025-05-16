import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../../components/Sidebar';

const AnalyticsPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const all = JSON.parse(localStorage.getItem('expenses')) || [];
  const data = all
    .filter(exp => exp.username === user.username)
    .map(exp => ({
      name: exp.date,
      amount: parseFloat(exp.amount)
    }));

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user.role} />
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Analytics Report</h2>
        <div className="bg-white p-4 rounded shadow w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;