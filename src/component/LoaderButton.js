import { CircularProgress } from '@mui/material'
import React from 'react'

const LoaderButton = ({ label, isLoading, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} className="px-4 py-2 bg-[#db3647] text-white rounded hover:bg-blue-700">
                {isLoading && <CircularProgress size={14} color='secondary' />}
                {label}
            </button>
        </div>
    )
}

export default LoaderButton
