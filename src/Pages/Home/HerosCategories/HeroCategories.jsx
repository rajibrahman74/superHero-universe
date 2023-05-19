import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HeroCategories = () => {
  const toys = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("");

  // Get unique categories
  const categories = ["All", ...new Set(toys.map((toy) => toy.category))];

  const handleTabSelect = (index) => {
    setActiveCategory(categories[index]);
  };

  return (
    <div>
      <Tabs onSelect={handleTabSelect}>
        <TabList className="flex">
          {categories.map((category) => (
            <Tab
              key={category}
              className="px-4 py-2 bg-gray-200 mr-2 rounded-md cursor-pointer"
              selectedClassName="bg-blue-500 text-white"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-3 gap-4">
              {toys
                .filter(
                  (toy) => category === "All" || toy.category === category
                )
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="bg-white p-4 rounded-md shadow-md relative"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-auto"
                    />
                    <h3 className="text-lg font-bold mt-2">{toy.name}</h3>
                    <p className="text-gray-600">{toy.price}</p>
                    <p className="text-gray-600">Rating: {toy.rating}</p>
                    <Link to={`/categories/${toy._id}`}>
                      {" "}
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default HeroCategories;
