import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardChart = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    const date = curr.date;
    const existing = acc.find(d => d.name === date);
    if (existing) {
      existing.amount += parseFloat(curr.amount);
    } else {
      acc.push({ name: date, amount: parseFloat(curr.amount) });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow w-full h-64 mt-6">
      <h3 className="text-lg font-semibold mb-2">Daily Expense Summary</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;