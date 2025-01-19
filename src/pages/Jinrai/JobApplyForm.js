import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/Modal/Modal";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "../../context/SnackBarContext";
import fetcher from "../../helper/fetcher";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from "../../utils/utils";

const JobApplyForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [comments, setComments] = useState("");
    const [resume, setResume] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { showSuccess, showError } = useSnackbar();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jobId = searchParams.get('job'); // Extract the job ID

    //console.log("resume ===>>> ", jobId)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !jobTitle || !resume) {
            showError("Please fill in all the required fields.");
            return;
        }
        setShowConfirmModal(true);
    };

    const handleConfirmSubmit = () => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('telephone', phone);
        formData.append('comment', comments);
        formData.append('jobId', jobId);
        formData.append('attachment', resume);

        axios.post(`${apiUrl}/job/applicant/create_applicant`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((res) => {
                showSuccess("Your job has been created successfully!");
                resetForm();
            })
            .catch((error) => {
                showError("Some Error Occured");
            }).finally(() => {
                setShowConfirmModal(false);
                setIsLoading(false);
            });
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setJobTitle("");
        setComments("");
        setResume(null);
    };

    return (
        <>
            <div className="bg-black text-white py-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-80"></div>
                <div className="relative container mx-auto max-w-[1000px] py-10 ">
                    <h1 className="text-7xl font-bold">Job Apply Form</h1>
                    <p className="text-white mt-9 text-[20px]">
                        <span
                            className="text-[#f5414d] cursor-pointer"
                            onClick={() => navigate("/job")}
                        >
                            Job
                        </span>
                        <span> / Job Apply Form</span>
                    </p>
                </div>
            </div>
            <div className="min-h-screen text-white flex justify-center items-center">
                <div className="container max-w-[1000px] mx-auto py-8 bg-white text-black mt-8">
                    <h1 className="text-3xl font-bold mb-4">Job Apply Form</h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name <span className="text-[#B9313A]">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name here"
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-[#B9313A]">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone <span className="text-[#B9313A]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone here"
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Title <span className="text-[#B9313A]">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                >
                                    <option>Java Developer – R&D</option>
                                    <option>Frontend Developer</option>
                                    <option>Backend Developer</option>
                                    <option>Fullstack Developer</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Comments
                            </label>
                            <textarea
                                placeholder="Enter your comments here"
                                className="w-full border border-gray-300 p-3 rounded-lg"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="w-fit">
                            <label className="block text-sm font-medium text-gray-700 mb-2 w-fit">
                                Upload Your Resume <span className="text-[#B9313A]">*</span>
                            </label>
                            <input
                                type="file"
                                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                                onChange={(e) => setResume(e.target.files[0])}
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Max. file size: 256 MB.
                            </p>
                        </div>

                        <div className="w-fit">
                            <button
                                type="submit"
                                className="w-full bg-[#B9313A] text-white rounded hover:bg-red-600 py-2 px-4"
                            >
                                {isLoading ? <CircularProgress size={24} /> : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            <Modal
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                title="Confirm Job Application"
            >
                <p>Are you sure you want to submit your job application?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-3 py-2 bg-red-600 text-white rounded mr-2"
                        onClick={() => setShowConfirmModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-3 py-2 bg-[#001628] text-white rounded"
                        onClick={handleConfirmSubmit}
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default JobApplyForm;
