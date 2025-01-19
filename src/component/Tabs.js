import React from 'react'

const Tabs = ({ tabs, setActiveTab, activeTab }) => {
    return (
        < div className="flex border-b mb-4" >
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm ${activeTab === tab
                        ? "border-b-2 border-[#db3647] text-[#db3647]"
                        : "text-gray-600"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </ div>
    )
}

export default Tabs
