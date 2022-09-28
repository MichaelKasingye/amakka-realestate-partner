
import {
    // Routes,
    // Route,
    // BrowserRouter,
    // Link,
    Navigate,
    Outlet
  } from "react-router-dom";

 export const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
    if (!user?.email) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };