import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  let location = useLocation();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isUserLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
