import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../../assets/bill2.png";

const InventoryLoginUI = ({ login, user, updateState, isLoading }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen">


            {/* Left Side - Image and Design */}
            <div className="hidden lg:flex md:w-1/2 relative items-center justify-center bg-gradient-to-tr from-[#ff828f] to-[#db3647] ">
                {/* Welcome Text */}
                <div className="absolute top-[25%] left-[-15%] rotate-[-90deg] text-white font-bold text-5xl opacity-80 z-20">
                    Welcome Back !
                </div>
                {/* Slanted Overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#db3647]"
                    style={{
                        clipPath: "polygon(0 0, 75% 0, 50% 100%, 0% 100%)",
                    }}
                ></div>
                {/* Image */}
                <img
                    src={img}
                    alt="Welcome Back"
                    className="max-w-[480px] max-h-full object-cover z-10 ml-4"
                />

            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 p-10 pt-32">
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold mb-3 text-[#131212]">Login</h1>
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
                            <label className="block text-black font-semibold uppercase">
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
                            className="w-full bg-[#db3647] text-white p-3 rounded"
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

export default InventoryLoginUI;
