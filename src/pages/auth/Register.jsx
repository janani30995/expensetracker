import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../../utils/users';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const exists = users.find(u => u.username === username);
    if (exists) {
      setError('Username already exists');
      return;
    }
    const newUser = { username, password, role };
    users.push(newUser); // Note: This won't persist in real apps
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate(role === 'manager' ? '/manager-dashboard' : '/employee-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          onChange={e => setPassword(e.target.value)}
        />
        <select
          className="w-full p-2 mb-4 border rounded"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;