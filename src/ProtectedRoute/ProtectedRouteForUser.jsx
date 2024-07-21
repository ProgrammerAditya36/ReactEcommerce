import { Navigate } from "react-router-dom";
const ProtectedRouteForUser = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("users"));

    if (user?.role === "user") {
        return children;
    }
    return <Navigate to="/login" />;
};
export default ProtectedRouteForUser;
