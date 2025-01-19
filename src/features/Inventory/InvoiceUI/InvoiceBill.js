import React, { useEffect, useRef } from 'react';

export const InvoiceBill = ({ billingData, updateFunc, state }) => {
  const fileInputRef = useRef(null);

  const handleFileAttachment = () => {
    fileInputRef.current.click();
  };

  //console.log("fileInputRef ===>", fileInputRef)

  useEffect(() => {
    if (!fileInputRef) return;

    if (fileInputRef) {
      updateFunc({ attachment: fileInputRef })
    }
  }, [fileInputRef])

  return (
    <div className="md:px-8 px-2 bg-white">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="flex flex-col items-start">
          <textarea
            className="w-[400px] border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px]"
            placeholder="Memo (Optional)"
            value={state.memo}
            onChange={(e) => updateFunc({ memo: e.target.value })}
          />

          {/* Attach Files */}
          <button
            className="text-[#db3647] font-medium hover:underline mb-4"
            onClick={handleFileAttachment}
          >
            + Attach files (Max 5MB)
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*,application/pdf,.doc,.docx,.xlsx,.xls"
            onChange={(e) => {
              const files = e.target.files;
              if (files.length > 0) {
                //console.log('Attached files:', files);
              }
            }}
          />
        </div>

        {/* Summary Section */}
        <div className="text-gray-600 max-w-[900px]">
          <div className="flex justify-between mb-2">
            <span className="mr-24 font-bold text-gray-800 md:text-[16px] text-[14px]">Sub-total *</span>
            <span className='md:text-[16px] text-[14px]'>₹ {billingData.subTotal}</span>
          </div>
          <div className="flex justify-between gap-9 mb-2">
            <span className="mr-24 font-bold text-gray-800 md:text-[16px] text-[14px]">Total Discount (-)</span>
            <span className='md:text-[16px] text-[14px]' >₹ {billingData.totalDiscount}</span>
          </div>
          <div className="flex justify-between gap-9 mb-2 ">
            <span className="mr-24 font-bold text-gray-800  md:text-[16px] text-[14px]">Before-tax</span>
            <span className='md:text-[16px] text-[14px]'>₹ {billingData.beforeTax}</span>
          </div>
          <button className="hover:underline font-bold md:text-[16px] text-[14px]">+ Add Charges/Discount</button>
          <div className="flex justify-between mt-2 mb-2">
            <span className="mr-24 font-bold text-gray-800 md:text-[16px] text-[14px]">Tax (+)</span>
            <span className='md:text-[16px] text-[14px]'>₹ {billingData.tax}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="mr-24 font-bold text-gray-800 md:text-[16px] text-[14px]">TCS</span>
            <span className='md:text-[16px] text-[14px]'>₹ {billingData.tcs}</span>
          </div>
          <div className="flex justify-between">
            <span className="mr-24 font-bold text-gray-800 md:text-[16px] text-[14px]">Rounding Off</span>
            <span className='md:text-[16px] text-[14px]'>{billingData.roundOff}</span>
          </div>
          <div className="flex justify-between border-t-2 mt-2">
            <span className="mr-24 font-bold text-gray-800 md:text-[20px] text-[16px] mt-3">Total *</span>
            <span className='font-bold text-gray-800 md:text-[20px] text-[16px] mt-3'>₹ {billingData.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};