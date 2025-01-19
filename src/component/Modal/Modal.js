import React from "react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full ">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-medium">{title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:text-gray-200"
                        aria-label="Close"
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="p-4">{children}</div>
                {footer && <div className="p-4 border-t">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
