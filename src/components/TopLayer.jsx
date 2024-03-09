import { FaSearch } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const TopLayer = () => {
  return (
    <div>
      <div className="toplayer flex items-center gap-10 justify-around w-[80rem] pl-[15rem] mt-12 pr-0">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="border-2 rounded-md px-10 py-4 text-left w-[30rem]"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-500">
            <FaSearch />
          </div>
        </div>
        <div className="flex gap-8 text-2xl">
          <div>
            <MdOutlineMessage />
          </div>
          <div>
            <IoNotifications />
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <div className="">
            <h2 className="font-bold">Aleena</h2>
            <h3>Administer</h3>
          </div>
          <div className="text-3xl">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};
