import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxsios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { data, loading, error } = useAxios(
    `/users`,
    "POST", 
    { email, password } 
  );

  const handleRegister = () => {
    if (email.length && password.length) {
      if (password === confirmPassword) {
        alert("Registration successful");
        navigate("/login"); 
      } else {
        alert("Passwords do not match");
      }
    }else{
        alert("empty Input")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Register Page</h1>
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
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </div>
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleRegister}
      >
        Register
      </button>
      <div className="mt-4 text-center">
        <span>Already have an account?</span>
        <button
          onClick={() => navigate("/login")}
          className="text-blue-500 ml-2"
        >
          Login here
        </button>
      </div>
    </div>
  );
};

export default Register;
