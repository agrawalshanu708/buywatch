import { Navigate } from "react-router-dom";
import { useAuth } from "../context/index";
const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children :  <Navigate to="/login" replace /> 
  ;
};
export { RequireAuth };
