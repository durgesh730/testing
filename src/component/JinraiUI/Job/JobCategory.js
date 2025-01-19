import React from "react";
import {
  FaChartLine,
  FaBrush,
  FaBullhorn,
  FaCog,
  FaVideo,
  FaTools,
  FaHandsHelping,
  FaWrench,
} from "react-icons/fa";

const categories = [
  { name: "Accounting/Finance", vacancies: 0, icon: <FaChartLine /> },
  { name: "Design & Development", vacancies: 0, icon: <FaBrush /> },
  { name: "Marketing/Sales", vacancies: 0, icon: <FaBullhorn />, highlight: true },
  { name: "Engineer/Architects", vacancies: 0, icon: <FaCog /> },
  { name: "Media/Ad./Event", vacancies: 0, icon: <FaVideo /> },
  { name: "Production/Operation", vacancies: 0, icon: <FaTools /> },
  { name: "Customer Support", vacancies: 0, icon: <FaHandsHelping /> },
  // { name: "Electrician/EEE", vacancies: 321, icon: <FaWrench /> },
];

const JobCategories = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="py-16 px-4 flex flex-col items-center  bg-gray-100 md:max-w-[1100px]  m-auto ">
        <h2 className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold text-center ">
          Popular Job Categories
        </h2>
        <div className="flex justify-center mb-5">
          <div className="md:w-80 w-40 border-b-4 border-[--bg-color] mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto ">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center ${category.highlight
                ? "bg-[#B9313A] text-white"
                : "bg-white text-gray-800"
                } hover:shadow-lg transition duration-300`}
            >
              <div
                className={`text-5xl mb-4 flex items-center justify-center ${category.highlight ? "text-white" : "text-[#B9313A]"
                  }`}
              >
                {category.icon}
              </div>
              <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
              <p className="text-sm">{category.vacancies} Job Vacancy</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
