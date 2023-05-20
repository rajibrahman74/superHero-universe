import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Link } from "react-router-dom";

const MyToy = ({ toy }) => {
  const { _id, seller, price, name, quantity, picture } = toy;
  console.log(toy);
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
        <span className="flex justify-center items-center gap-5">
          <Link to={`/alltoys/${_id}`}>
            <span>
              <img
                className="h-10 w-10"
                src="https://i.ibb.co/FJT6JSd/updater.png"
                alt=""
              />
            </span>
          </Link>
          <Link to={`/alltoys/${_id}`}>
            <span>
              <img
                className="h-10 w-10"
                src="https://i.ibb.co/tYLWcK3/delete.png"
                alt=""
              />
            </span>
          </Link>
        </span>
      </th>
    </tr>
  );
};

export default MyToy;
