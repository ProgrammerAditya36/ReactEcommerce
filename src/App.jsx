import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CartPage from "./pages/CartPage/CartPage";
import AllProduct from "./pages/AllProduct/AllProduct";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import UpdateProductPage from "./pages/UpdateProductPage/UpdateProductPage";
import MyState from "./context/MyState";
import { Toaster } from "react-hot-toast";
import ProtectedRouteForUser from "./ProtectedRoute/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./ProtectedRoute/ProtectedRouteForAdmin";
const App = () => {
    return (
        <>
            <MyState>
                <Router>
                    <ScrollTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/*" element={<NoPage />} />
                        <Route
                            path="/productInfo/:id"
                            element={<ProductInfo />}
                        />

                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/allproduct" element={<AllProduct />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/user-dashboard"
                            element={
                                <ProtectedRouteForUser>
                                    <UserDashboard />
                                </ProtectedRouteForUser>
                            }
                        />
                        <Route
                            path="/admin-dashboard"
                            element={
                                <ProtectedRouteForAdmin>
                                    <AdminDashboard />
                                </ProtectedRouteForAdmin>
                            }
                        />
                        <Route
                            path="/addproduct"
                            element={
                                <ProtectedRouteForAdmin>
                                    <AddProductPage />
                                </ProtectedRouteForAdmin>
                            }
                        />
                        <Route
                            path="/updateproduct/:id"
                            element={
                                <ProtectedRouteForAdmin>
                                    <UpdateProductPage />
                                </ProtectedRouteForAdmin>
                            }
                        />
                    </Routes>
                    <Toaster />
                </Router>
            </MyState>
        </>
    );
};

export default App;
