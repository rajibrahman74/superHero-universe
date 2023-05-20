import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HeroCategories = () => {
  const toys = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);

  // Get unique categories
  const categories = ["All", ...new Set(toys.map((toy) => toy.category))];

  // handle active category
  const handleTabSelect = (index) => {
    setActiveCategory(categories[index]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-center text-4xl font-bold pb-12">
        Shopping with{" "}
        <span className="text-blue-800 font-extrabold">Categories</span>
      </h2>
      <Tabs onSelect={handleTabSelect}>
        <TabList className="flex justify-center items-center flex-wrap mx-auto pb-8">
          {categories.map((category) => (
            <Tab
              key={category}
              className="px-4 py-2 bg-gray-200 mt-2 mr-2 md:mr-2 cursor-pointer font-semibold border-0 outline-none rounded-none"
              selectedClassName="bg-warning text-white font-bold"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid md:grid-cols-3 gap-10">
              {toys
                .filter(
                  (toy) => category === "All" || toy.category === category
                )
                .map((toy) => (
                  <div
                    key={toy.id}
                    className="bg-[#f2f2f2] p-4  shadow-md relative"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-auto"
                    />
                    <h3 className="text-xl font-semibold mt-2">{toy.name}</h3>
                    <p className="text-gray-600 text-lg">{toy.price}</p>
                    <p className="text-gray-600 text-lg">
                      Rating: {toy.rating}
                    </p>
                    <Link className="" to={`/herocategories/${toy._id}`}>
                      <button className="rounded-none border-0 text-white bg-warning px-5 py-2.5 mt-4 hover:bg-black">
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
