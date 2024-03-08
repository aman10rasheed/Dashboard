import axtella from '../assets/images/axtella.png'; 
import Dropdown from './Dropdown';
import { GoSignOut } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <>
        <div>
            <div className='w-[13rem]'><img src={axtella} alt="axtella" /></div>
            <div>
                <Dropdown/>
            </div>
            <div>
                <ul className='px-2 font-medium w-[13rem]'>
                    <li className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white "><GoSignOut/> Sign Out</li>
                    <li className="flex items-center gap-2 px-4 py-2 rounded-lg  text-gray-400 hover:text-white hover:bg-blue-500 font-semibold focus:bg-blue-500 focus:text-white "><IoIosHelpCircleOutline/>Help</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar