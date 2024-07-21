/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            {/* Login Form  */}
            <div className="login_Form rounded-xl border border-pink-100 bg-pink-50 px-1 py-6 shadow-md lg:px-8">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-pink-500">
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-96 rounded-md border border-pink-200 bg-pink-50 px-2 py-2 placeholder-pink-200 outline-none"
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-96 rounded-md border border-pink-200 bg-pink-50 px-2 py-2 placeholder-pink-200 outline-none"
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type="button"
                        className="w-full rounded-md bg-pink-500 py-2 text-center font-bold text-white hover:bg-pink-600"
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className="text-black">
                        Don't Have an account{" "}
                        <Link
                            className="font-bold text-pink-500"
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
