import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData();
  useTitle("All toys")
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
    <div className="max-w-7xl mx-auto px-6">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <h1 className="text-3xl text-center my-12 font-bold">
        All <span className="text-blue-800 font-extrabold">Toys</span>
      </h1>
      <div className="overflow-x-auto w-full">
        <div className="pb-12 pt-4 flex items-center justify-center">
          <div className="flex items-center w-2/3 text-start">
            <label className="font-semibold text-xl w-1/3">
              Search your favorite
              <span className="font-extrabold text-blue-800"> toys:</span>
            </label>
            <input
              type="text"
              placeholder="Search by Toy Name"
              className="border rounded px-4 py-2 w-2/3 -ml-6"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="w-1/3 text-end">
            <label htmlFor="limitSelect" className="mr-2 font-extrabold ">
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
        </div>

        <table className="table w-full">
          <thead className="text-cente">
            <tr>
              <th className="text-blue-800 font-bold text-[15px] text-center">
                Image
              </th>
              <th className="text-blue-800 font-bold text-[15px]">
                Seller name
              </th>
              <th className="text-blue-800 font-bold text-[15px]">toy Name</th>
              <th className="text-blue-800 font-bold text-[15px]">Quantity</th>
              <th className="text-blue-800 font-bold text-[15px]">Price</th>
              <th className="text-blue-800 font-bold text-[15px] text-center">
                Ratings
              </th>
              <th className="text-blue-800 font-bold text-[15px]"></th>
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
