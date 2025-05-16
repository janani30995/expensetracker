import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import EmployeeDashboard from '../pages/dashboard/EmployeeDashboard';
import ManagerDashboard from '../pages/dashboard/ManagerDashboard';
import SubmitExpense from '../pages/expenses/SubmitExpense';
import AnalyticsPage from '../pages/analytics/AnalyticsPage';

const AppRoutes = () => (
<Routes>
<Route path="/" element={<Login />} />
<Route path="/employee-dashboard" element={<EmployeeDashboard />} />
<Route path="/manager-dashboard" element={<ManagerDashboard />} />
<Route path="/submit-expense" element={<SubmitExpense />} />
<Route path="/analytics" element={<AnalyticsPage />} />
</Routes>
);

export default AppRoutes;