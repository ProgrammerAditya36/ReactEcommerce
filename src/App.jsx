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
const App = () => {
    return (
        <div>
            <Router>
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<NoPage />} />
                    <Route path="/productInfo" element={<ProductInfo />} />

                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/allproduct" element={<AllProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route
                        path="/admin-dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route path="/addproduct" element={<AddProductPage />} />
                    <Route
                        path="/updateproduct"
                        element={<UpdateProductPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
