/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import toast from "react-hot-toast";
import { auth, fireDb } from "../../firebase/firebaseconfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/Loader/Loader";
const Signup = () => {
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });
    const usesrSignupFunction = async () => {
        if (
            userSignup.name === "" ||
            userSignup.email === "" ||
            userSignup.password === ""
        ) {
            toast.error("Please fill all the fields");
            return;
        }
        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(
                auth,
                userSignup.email,
                userSignup.password,
            );
            const user = {
                name: userSignup.name,
                email: userSignup.email,
                role: userSignup.role,
                uid: users.user.uid,
                time: Timestamp.now(),
                date: new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };
            const userRef = collection(fireDb, "user");
            addDoc(userRef, user);
            setUserSignup({
                name: "",
                email: "",
                password: "",
                role: "user",
            });
            toast.success("Signup Successfully");
            setLoading(false);
            navigate("/login");
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error("Something went wrong");
        }
    };
    return (
        <div className="flex h-screen items-center justify-center">
            {loading && <Loader />}
            <div className="login_Form rounded-xl border border-blue-100 bg-blue-50 px-1 py-6 shadow-md lg:px-8">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-blue-500">
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value,
                            });
                        }}
                        className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 placeholder-blue-200 outline-none"
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value,
                            });
                        }}
                        className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 placeholder-blue-200 outline-none"
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value,
                            });
                        }}
                        className="w-96 rounded-md border border-blue-200 bg-blue-50 px-2 py-2 placeholder-blue-200 outline-none"
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        onClick={usesrSignupFunction}
                        type="button"
                        className="w-full rounded-md bg-blue-500 py-2 text-center font-bold text-white hover:bg-blue-600"
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className="text-black">
                        Have an account{" "}
                        <Link className="font-bold text-blue-500" to={"/login"}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;
