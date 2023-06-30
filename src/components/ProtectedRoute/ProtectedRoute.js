import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, component: Component, ...props }) {
  return isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
