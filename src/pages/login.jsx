import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxsios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // useAxios hook'ini chaqirish
  const { data, loading, error } = useAxios(
    `/users`, // API URL
    'GET' // GET so'rovi
  );



  const handleLogin = () => {    
    const user = data?.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('token', 'your-token-value'); // Tokenni saqlash
      navigate('/'); // Bosh sahifaga yo'naltirish
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="mt-4 text-center">
        <span>Don't have an account?</span>
        <button
          onClick={() => navigate('/register')}
          className="text-blue-500 ml-2"
        >
          Register here
        </button>
      </div>
    </div>
  );
};

export default Login;
