import { FaSearch } from "react-icons/fa";
import VehicleTable from "./VehicleTable";

const Vehicles = () => {
  return (
    <div className="mt-4">
      <div>
        <h1 className="font-bold text-xl text-gray-500 py-8 border">Vehicles</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-7">
          <select id="id" name="id" className="border rounded-lg px-1 py-1">
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="mercedes">3</option>
            <option value="audi">4</option>
          </select>
          <select id="cars" name="cars" className="border rounded-lg px-1 py-1">
            <option value="volvo">All Vehicles</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex gap-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="border-2 rounded-md px-10 py-4 text-left w-[20rem] h-[2.5rem]"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-500">
            <FaSearch />
          </div>
        </div >
          <button className="bg-blue-600 rounded-lg px-3 py-1 mx-2">+ Vehicles</button>
        </div>
      </div>
      <div>
        <VehicleTable/>
      </div>
    </div>
  );
};

export default Vehicles;
