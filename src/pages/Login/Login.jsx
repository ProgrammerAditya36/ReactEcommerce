import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth, fireDb } from "../../firebase/firebaseconfig";
import Loader from "../../components/Loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("Please fill all the fields");
            return;
        }
        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(
                auth,
                userLogin.email,
                userLogin.password,
            );
            try {
                const q = query(
                    collection(fireDb, "user"),
                    where("uid", "==", users.user.uid),
                );
                const data = onSnapshot(q, (querySnapshot) => {
                    let user;
                    querySnapshot.forEach((doc) => {
                        user = doc.data();
                    });
                    localStorage.clear("users");
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: "",
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "admin") {
                        navigate("/admin-dashboard");
                    } else {
                        navigate("/user-dashboard");
                    }
                });
                return () => data;
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error("Invalid email or password");
        }
    };
    return (
        <div className="flex h-screen items-center justify-center">
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form rounded-xl border border-blue-100 bg-blue-50 px-8 py-6 shadow-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-blue-500">
                        Login
                    </h2>
                </div>
                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value,
                            });
                        }}
                        className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 placeholder-blue-200 outline-none"
                    />
                </div>
                {/* Input Two  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value,
                            });
                        }}
                        className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 placeholder-blue-200 outline-none"
                    />
                </div>
                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type="button"
                        onClick={userLoginFunction}
                        className="w-full rounded-md bg-blue-500 py-2 text-center font-bold text-white hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
                <div>
                    <h2 className="text-black">
                        Don't Have an account{" "}
                        <Link
                            className="font-bold text-blue-500"
                            to={"/signup"}
                        >
                            Signup
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
