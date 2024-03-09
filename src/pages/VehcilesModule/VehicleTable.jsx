import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

const VehicleTable = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      registrationNumber: "KL07BH2001",
      displayName: "Aman",
      account: "Avl",
      deviceId: "Kerala",
      SubsriptionExpiry: "20/12/24",
      FranchisePartner: "Axtella Gobal",
      CurrentMotion: "No Avaliable",
    },
    {
      id: 2,
      registrationNumber: "MH02AB1234",
      displayName: "John",
      account: "ABC",
      deviceId: "Maharashtra",
      SubsriptionExpiry: "21/01/25",
      FranchisePartner: "XYZ Solutions",
      CurrentMotion: "Not Active",
    },
    {
      id: 3,
      registrationNumber: "KA05CD6789",
      displayName: "Emily",
      account: "PQR",
      deviceId: "Karnataka",
      SubsriptionExpiry: "22/03/26",
      FranchisePartner: "Quick Motors",
      CurrentMotion: "Stopped",
    },
    {
      id: 4,
      registrationNumber: "TN09EF9876",
      displayName: "Alex",
      account: "LMN",
      deviceId: "Tamil Nadu",
      SubsriptionExpiry: "23/05/27",
      FranchisePartner: "Speedy Vehicles",
      CurrentMotion: "Moving",
    },
    {
      id: 5,
      registrationNumber: "DL03GH5432",
      displayName: "Sophia",
      account: "QRS",
      deviceId: "Delhi",
      SubsriptionExpiry: "24/07/28",
      FranchisePartner: "Rapid Autos",
      CurrentMotion: "Idle",
    },
    {
      id: 6,
      registrationNumber: "UP08IJ2109",
      displayName: "William",
      account: "STU",
      deviceId: "Uttar Pradesh",
      SubsriptionExpiry: "25/09/29",
      FranchisePartner: "Swift Motors",
      CurrentMotion: "Running",
    },
    {
      id: 7,
      registrationNumber: "GJ06KL8765",
      displayName: "Emma",
      account: "VWX",
      deviceId: "Gujarat",
      SubsriptionExpiry: "26/11/30",
      FranchisePartner: "Zoom Cars",
      CurrentMotion: "In Use",
    },
    {
      id: 8,
      registrationNumber: "WB04MN4321",
      displayName: "Oliver",
      account: "YZA",
      deviceId: "West Bengal",
      SubsriptionExpiry: "27/01/31",
      FranchisePartner: "Fast Track",
      CurrentMotion: "Not Available",
    },
    {
      id: 9,
      registrationNumber: "HR01OP0987",
      displayName: "Isabella",
      account: "BCD",
      deviceId: "Haryana",
      SubsriptionExpiry: "28/03/32",
      FranchisePartner: "Speedsters",
      CurrentMotion: "Unavailable",
    },
    {
      id: 10,
      registrationNumber: "RJ07QR7654",
      displayName: "James",
      account: "EFG",
      deviceId: "Rajasthan",
      SubsriptionExpiry: "29/05/33",
      FranchisePartner: "Express Wheels",
      CurrentMotion: "Out of Service",
    },
  ]);

  // Function to handle edit
  const handleEdit = (id) => {
    // Logic to handle edit
    console.log(`Editing vehicle with ID: ${id}`);
  };

  // Function to handle delete
  const handleDelete = (id) => {
    // Logic to handle delete
    setVehicles((prevVehicles) =>
      prevVehicles.filter((vehicle) => vehicle.id !== id)
    );
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Registration Number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Display Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Account
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Device Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Subsription Expiry
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Franchise Partner
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Current Motion
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the vehicles array to generate table rows */}
                {vehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b dark:border-neutral-500"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {vehicle.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.registrationNumber}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.displayName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.account}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {vehicle.deviceId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.SubsriptionExpiry}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.FranchisePartner}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {vehicle.CurrentMotion}
                    </td>
                    <td className="flex justify-center py-4">
                      <CiEdit onClick={() => handleEdit(vehicle.id)} />
                      <MdDeleteOutline
                        onClick={() => handleDelete(vehicle.id)}
                      />
                      <SlOptionsVertical />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;
