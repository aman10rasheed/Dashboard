import { useState } from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-[25rem] w-[13rem]'>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black w-[13rem] gap-4 flex rounded-lg hover:bg-blue-800  focus:outline-none  font-medium  text- px-5 py-2.5 text-center items-center"
        type="button"
      >
      <RxDashboard/> Dashboard
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? 'block' : 'hidden'
        } z-10 bg-white divide-y divide-gray-100 px-2 pb-4 border-b-2 border-blue-500  `}
      >
        <ul
          className="  text-gray-900 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className=" flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
               <FaTruckFast/>Vehicles
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
              <FaTruckFast/>Devices
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
              <FaTruckFast/>Troubleshoot
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
              <FaTruckFast/>Subscribtions
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
              <FaTruckFast/>Support
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
             <FaTruckFast/> Customer
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
             <FaTruckFast/> User
            </a>
          </li><li>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white"
            >
              <FaTruckFast/>Logs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
