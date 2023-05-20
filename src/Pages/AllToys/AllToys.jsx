import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
  const allToys = useLoaderData();
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  

  // update filter toys
  useEffect(() => {
    const updatedFilteredToys = allToys.filter((toy) => {
      const name = toy.name || ""; 

      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredToys(updatedFilteredToys);
  }, [allToys, searchTerm]);


  // search impliment here
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  // limite data chanage
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const displayedToys = filteredToys.slice(0, limit);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl">Your bookings {displayedToys.length}</h1>
      <div className="overflow-x-auto w-full">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by Toy Name"
            className="border rounded px-4 py-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="limitSelect" className="mr-2">
            Show:
          </label>
          <select
            id="limitSelect"
            className="border rounded px-4 py-2"
            value={limit}
            onChange={handleLimitChange}
          >
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>

        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th>Image</th>
              <th>Seller</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayedToys.map((toy) => (
              <Toys key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;