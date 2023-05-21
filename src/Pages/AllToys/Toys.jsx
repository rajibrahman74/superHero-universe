import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Toys = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const { _id, seller, price, name, quantity, picture } = toy;

  return (
    <tr className="t mx-auto">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">{<img src={picture} />}</div>
        </div>
      </td>
      <td className="text-lg font-bold">{seller}</td>
      <td className="font-semibold">{name}</td>
      <td className="font-bold text-center">{quantity}</td>
      <td className="font-bold"> ${price}</td>
      <td>
        <div className="flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, index) => {
            const rating = Math.round(toy.rating);
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
      </td>
      <th className="text-center">
        {user ? (
          <Link to={`/alltoys/${_id}`}>
            <button className="border-0 py-2 text-white hover:bg-black px-4 bg-warning opacity-75">
              View Details
            </button>
          </Link>
        ) : (
          <Link to={`/alltoys/${_id}`}>
            <button
              className="border-0 py-2 opacity-90 text-white hover:bg-black px-4 bg-warning"
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
      </th>
    </tr>
  );
};

export default Toys;