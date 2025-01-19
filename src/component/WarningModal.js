import { CircularProgress } from '@mui/material';
import { Button } from 'flowbite-react';
import { Modal } from 'antd';

const WarningModal = ({
    isOpen,
    onClose,
    modalTitle,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    isLoading,
    color = true
}) => {
    return (
        <Modal open={isOpen} onCancel={onClose} onOk={onClose}
            footer={[
                <div className=' flex justify-end flex-row '>
                    <Button color={`${color ? "failure" : "success"}`} onClick={onConfirm}>
                        {isLoading && <CircularProgress sx={{ color: "white" }} size={18} />}
                        {confirmText}
                    </Button>,
                    <Button className='border border-gray-500' color="gray" onClick={onCancel}>
                        {cancelText}
                    </Button>
                </div>
            ]}
        >
            <div className="text-center">
                <div>
                    <svg className={`w-12 h-12 mx-auto mb-4 ${color ? "text-red-400" : " text-green-600"}  dark:text-gray-200`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {modalTitle}
                </h3>
            </div>
        </Modal>
    );
}

export default WarningModal;
