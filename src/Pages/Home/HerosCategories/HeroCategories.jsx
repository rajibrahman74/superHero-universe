import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import clsx from "clsx";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const HeroCategories = () => {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);
  console.log(toys);

  // Get unique categories
  const categories = ["All", ...new Set(toys.map((toy) => toy.category))];

  // handle active category
  const handleTabSelect = (index) => {
    setActiveCategory(categories[index]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <h2 className="text-center text-xl md:text-3xl font-bold pb-12">
        Shopping with{" "}
        <span className="text-blue-800 font-extrabold">Categories</span>
      </h2>
      <Tabs onSelect={handleTabSelect}>
        <TabList className="flex justify-center items-center flex-wrap mx-auto pb-8">
          {categories.map((category) => (
            <Tab
              key={category}
              className="px-4 py-2 bg-gray-200 mt-2 mr-2 md:mr-2 cursor-pointer font-semibold border-0 outline-none rounded-none"
              selectedClassName="bg-warning opacity-75 text-white font-bold"
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
                    className="bg-white p-4  shadow-md relative"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-auto"
                    />
                    <h3 className="text-xl font-semibold mt-2 py-1">
                      {toy.name}
                    </h3>
                    <p className="text-gray-600 text-lg py-1">
                      Price: ${toy.price}
                    </p>
                    <div className="flex items-center py-1">
                      <span className="mr-1">Rating:</span>
                      {Array.from({ length: 5 }).map((_, index) => {
                        const rating = Math.round(toy.rating);
                        return (
                          <StarIcon
                            key={index}
                            className={clsx(
                              "h-4 w-4",
                              index < rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            )}
                          />
                        );
                      })}
                    </div>

                    {user ? (
                      <Link className="" to={`/herocategories/${toy._id}`}>
                        <button className="rounded-none border-0 opacity-75 text-white bg-warning px-5 py-2.5 mt-4 hover:bg-black">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <Link className="" to={`/herocategories/${toy._id}`}>
                        <button
                          className="rounded-none border-0 opacity-75 text-white bg-warning px-5 py-2.5 mt-4 hover:bg-black"
                          onClick={() => {
                            Swal.fire({
                              position: "top-start",
                              icon: "error",
                              title: "Please login first",
                              showConfirmButton: false,
                              timer: 3000,
                            });
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    )}
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
