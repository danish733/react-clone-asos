import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContextProvider";

export default function PrivateAdminRoute({children}) {
   const {adminDetails} = useContext(AdminContext)

    if (!adminDetails?.adminLoggedIn) {
      return <Navigate to="/admin-login" />;
    }
  
    return children;
  }
  