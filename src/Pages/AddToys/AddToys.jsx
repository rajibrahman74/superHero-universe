import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.toyName.value;
    const picture = form.pictureURL.value;
    const seller = form.sellerName.value;
    const seller_email = form.sellerEmail.value;
    const category = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.details.value;
    const toyData = {
      category,
      picture,
      name,
      price,
      rating,
      quantity,
      seller,
      description,
      seller_email,
    };

    fetch("https://super-hero-universe-server.vercel.app/herotoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "Add new toy successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        form.reset();
      });
  };
  return (
    <section className="max-w-7xl mx-auto px-4 mb-24 p-12">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <form
        onSubmit={handleAddToy}
        className="max-w-[650px] py-12 mx-auto overflow-hidden bg-white rounded-md shadow-lg text-slate-500"
      >
        {/* Body*/}
        <div className="p-6">
          <header className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-700">Add a new toy</h3>
          </header>
          <div className="flex flex-col">
            <div className="flex gap-4 w-full">
              {/* Input field */}
              <div className="relative my-4 w-1/2">
                <input
                  type="text"
                  name="toyName"
                  placeholder="Toy Name"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Toy Name
                </label>
              </div>

              {/* Additional fields */}
              <div className="relative my-4 w-1/2">
                <input
                  id="pictureURL"
                  type="text"
                  name="pictureURL"
                  placeholder="Picture URL of the toy"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b14"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Picture URL of the toy
                </label>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              {/* Seller name field */}
              <div className="relative my-4 w-1/2">
                <input
                  id="sellerName"
                  type="text"
                  name="sellerName"
                  placeholder="Seller name"
                  defaultValue={user ? user.displayName : ""}
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b16"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Seller name
                </label>
              </div>
              {/* Seller email field */}
              <div className="relative my-4 w-1/2">
                <input
                  id="sellerEmail"
                  type="email"
                  name="sellerEmail"
                  placeholder="Seller email"
                  defaultValue={user ? user.email : ""}
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b17"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Seller email
                </label>
              </div>
            </div>
            <div className="flex w-full gap-4">
              {/* Sub Category field */}
              <div className="relative my-4 w-1/2">
                <input
                  type="text"
                  name="subCategory"
                  placeholder="Name"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b15"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Sub-Category
                </label>
              </div>

              {/* Price field */}
              <div className="relative my-4 w-1/2">
                <input
                  id="name"
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b15"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Price
                </label>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              {/* Rating field */}
              <div className="relative my-4 w-1/2">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b15"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Rating
                </label>
              </div>
              {/* Available Quantity field */}
              <div className="relative my-4 w-1/2">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b15"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                >
                  Available Quantity
                </label>
              </div>
            </div>
            {/* Details Description field */}
            <div className="relative my-4">
              <textarea
                className="relative w-full h-24 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-400 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                name="details"
                cols="30"
                rows="10"
                placeholder="Description"
              ></textarea>
              <label
                htmlFor="id-b15"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-900 font-semibold peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
              >
                Description
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full btn border-0 h-10 mt-6 font-medium text-white transition-all bg-warning opacity-75 rounded hover:bg-black"
          >
            Add A Toy
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddToys;
