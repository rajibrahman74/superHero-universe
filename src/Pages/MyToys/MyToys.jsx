import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToy from "./MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [control]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControl(!control);
              Swal.fire(
                "Deleted!",
                "Your Toy deleted successfully.",
                "success"
              );
            }
          });
      }
    });
  };

  console.log(myToys);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <h1 className="text-3xl text-center my-12 font-bold">
        My <span className="text-blue-800 font-extrabold">Toys</span>
      </h1>
      <div className="overflow-x-auto w-full">
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
              <th className="text-centet text-blue-800 font-bold text-[15px] text-center">
                Status
              </th>
              <th className="text-blue-800 font-bold text-[15px]"></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToy key={toy._id} toy={toy} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
