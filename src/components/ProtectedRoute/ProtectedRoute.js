import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, component: Component, ...props }) {
  return isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
