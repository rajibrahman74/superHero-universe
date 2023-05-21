import { useLoaderData } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import useTitle from "../../../hooks/useTitle";

const HeroDetails = () => {
  useTitle("hero details")
  const heroToys = useLoaderData();
  const { picture, description, name, price, seller, seller_email, quantity } =
    heroToys;
  console.log(heroToys);
  return (
    <>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <div className="min-w-screen min-h-screen bg-{#f2f2f2]} flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={picture} className="w-full relative z-10" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                <h3 className="text-lg py-1">
                  Seller name: <span className="font-semibold">{seller}</span>
                </h3>
                <h4 className="text-base py-1">
                  Seller email:{" "}
                  <span className="font-semibold">
                    {seller_email}
                  </span>
                </h4>
                <p className="text-sm py-1">
                  {description}{" "}
                  <a
                    href="#"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right" />
                  </a>
                </p>
                <div className="flex items-center gap-10 py-1">
                  <span className="text-base">
                    Available quantity:{" "}
                    <span className="font-bold text-lg">{quantity}</span>
                  </span>
                  <div className="flex items-center justify-start my-auto">
                    <span className="text-base mr-1">Rating:</span>
                    {Array.from({ length: 5 }).map((_, index) => {
                      const rating = Math.round(heroToys.rating);
                      return (
                        <StarIcon
                          key={index}
                          className={clsx(
                            "h-4 w-4",
                            index < rating ? "text-yellow-400" : "text-gray-300"
                          )}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-5xl leading-none align-baseline">
                    ${price}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button className="bg-warning opacity-75 hover:opacity-100 text-white rounded-none px-10 py-2 font-semibold btn border-0">
                    <i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDetails;