import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoutes = () => {
  const {
    auth: { status },
  } = useAuth();
  const location = useLocation();
  return status ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
