import { NavLink } from 'react-router-dom';
import { BarChart3, FilePlus, History, CheckCircle2, PieChart } from 'lucide-react';

const Sidebar = ({ role }) => {
  const routes = role === 'manager'
    ? [
        { to: '/manager-dashboard', icon: <BarChart3 />, label: 'Dashboard' },
        { to: '/approvals', icon: <CheckCircle2 />, label: 'Approvals' },
        { to: '/analytics', icon: <PieChart />, label: 'Analytics' }
      ]
    : [
        { to: '/employee-dashboard', icon: <BarChart3 />, label: 'Dashboard' },
        { to: '/submit-expense', icon: <FilePlus />, label: 'Add Expense' },
        { to: '/expense-history', icon: <History />, label: 'History' },
        { to: '/analytics', icon: <PieChart />, label: 'Analytics' }
      ];

  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <nav className="flex flex-col gap-3">
        {routes.map((r, i) => (
          <NavLink
            key={i}
            to={r.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? 'bg-blue-100 font-semibold' : ''
              }`
            }
          >
            {r.icon}
            {r.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
