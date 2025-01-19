import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginUI = ({ login, user, updateState, isLoading }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Form */}
            <div
                className="hidden md:flex md:w-1/2  items-center pl-24"
                style={styles.leftSection}
            >
                <div>
                    <h2 className="text-7xl font-bold text-white mt-4 ">Welcome
                    </h2>
                    <h2 className="text-7xl font-bold text-white mt-3 ">Back !</h2>
                    <p className="text-white mt-4">
                        It’s great to have you here. Let’s get started.
                    </p>
                </div>
            </div>
            {/* Right Side - Illustration */}


            <div className="w-full md:w-1/2 p-10 pt-32">
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold mb-3 text-[#845EC2]">Login</h1>
                    <p className="mb-9 text-black text-[12px]">
                        Log in with your email and password. <br />
                        Please ensure your credentials are correct.
                    </p>
                    <form>
                        <div className="mb-6">
                            <label className="block text-black font-semibold uppercase">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                value={user.email}
                                name="email"
                                onChange={(e) => updateState({ email: e.target.value })}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-black  font-semibold uppercase">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="at least 8 characters"
                                className="w-full p-2 border border-gray-300 rounded mt-2 pr-10"
                                value={user.password}
                                name="password"
                                onChange={(e) => updateState({ password: e.target.value })}
                            />
                            <div
                                className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-[#845EC2] text-lg cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                        <div className="text-right mb-10">
                            <Link to="/forgot/password" className="text-black hover:underline">
                                Forget password?
                            </Link>
                        </div>
                        <button
                            onClick={(e) => login(e)}
                            className="w-full bg-gradient-to-r from-[#845EC2] to-[#D65DB1] text-white p-3 rounded"
                        >
                            {isLoading && <CircularProgress color="inherit" size={12} />}
                            Log in
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};

const styles = {
    leftSection: {
        background: "linear-gradient(135deg, #845EC2, #D65DB1)",
    },
};

export default LoginUI;
