import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;