import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const updateToyData = useLoaderData();
  const { _id } = updateToyData;

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.details.value;
    const toyData = {
      price,
      quantity,
      description,
    };

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "Updated toy information successfully",
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
        onSubmit={handleUpdateToy}
        className="max-w-[650px] py-12 mx-auto overflow-hidden bg-white rounded-md shadow-lg text-slate-500"
      >
        {/* Body*/}
        <div className="p-6">
          <header className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-700">
              Update toy Information
            </h3>
          </header>
          <div className="flex flex-col">
            <div className="flex gap-4 w-full">
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
            Update Toy
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateToy;
