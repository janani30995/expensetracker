import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard';
import ManagerDashboard from './pages/dashboard/ManagerDashboard';
import SubmitExpense from './pages/expenses/SubmitExpense';
import ExpenseHistory from './pages/expenses/ExpenseHistory';
import AnalyticsPage from './pages/analytics/AnalyticsPage';
import ManagerApprovals from './pages/manager/ManagerApprovals';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/submit-expense" element={<SubmitExpense />} />
      <Route path="/expense-history" element={<ExpenseHistory />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/approvals" element={<ManagerApprovals />} />
    </Routes>
  );
};

export default AppRoutes;