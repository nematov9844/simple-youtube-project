import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Tokenni olish

  if (!token) {
    return <Navigate to="/login" replace />; // Agar token bo'lmasa login sahifasiga yo'naltirish
  }

  return element; // Agar token mavjud bo'lsa, elementni qaytarish
};


export default  PrivateRoute