import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fetcher from "../../helper/fetcher";
import Modal from "../../component/Modal/Modal";
import { useSnackbar } from "../../context/SnackBarContext";
import { CircularProgress } from "@mui/material";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const titleQuillRef = useRef(null);
  const desQuillRef = useRef(null);
  const { showSuccess, showError } = useSnackbar();

  const handleTitleChange = (content, delta, source, editor) => {
    const text = editor.getText();
    const words = text.trim().split(/\s+/);

    if (words.length > 10000) {
      const trimmedContent = words.slice(0, 100).join(" ");
      editor.setText(trimmedContent);
      setTitle(trimmedContent);
    } else {
      setTitle(content);
    }
  };

  const handleDescriptionChange = (content, delta, source, editor) => {
    const text = editor.getText();
    const words = text.trim().split(/\s+/);

    if (words.length > 100000) {
      const trimmedContent = words.slice(0, 100).join(" ");
      editor.setText(trimmedContent);
      setDes(trimmedContent);
    } else {
      setDes(content);
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !des.trim()) {
      showError("Please fill in both the job title and description.");
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = () => {
    setIsLoading(true);
    fetcher
      .post("/job/create_job", { jobTitle: title, jobDescription: des })
      .then((res) => {
        if (res.data.success) {
          setShowConfirmModal(false);
          showSuccess("Your job has been created successfully!");
          setTitle("");
          setDes("");
        }
      })
      .catch((err) => {
        setShowConfirmModal(false);
        showError("Some Error Occured");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="px-0 py-0">
      <div className="mb-4">
        <span className="text-xl font-semibold">Create Job</span>
      </div>

      <div>Job Title</div>
      <ReactQuill
        ref={titleQuillRef}
        value={title}
        onChange={handleTitleChange}
        placeholder={"Senior Engineer – GTAC | Location: Mumbai"}
      />
      <div className="mt-4">Job Description</div>
      <ReactQuill
        ref={desQuillRef}
        value={des}
        onChange={handleDescriptionChange}
        placeholder={"Enter job details here.."}
      />
      <button
        className="md:px-6 px-3 py-2 font-semibold bg-[#001628] rounded hover:bg-[#fff] hover:text-[#001628] hover:border hover:border-[#001628] mt-10 text-white"
        aria-label="Learn more about our portfolio"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Job Creation"
      >
        <p>Are you sure you want to create this job?</p>
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
            {isLoading && <CircularProgress size={16} />} Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
