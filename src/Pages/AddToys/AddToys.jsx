const AddToys = () => {
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const toyname = form.toyname.value;
    const sellername = form.sellername.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photourl = form.photourl.value;
    const selleremail = form.selleremail.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;

    const newToy = {
      toyname,
      sellername,
      price,
      rating,
      photourl,
      selleremail,
      subcategory,
      description,
    };
    console.log(newToy);
  };

  return (
    <div className="grid min-h-screen place-items-center mt-20 mb-24">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 rounded">
        <h1 className="text-2xl text-center pb-5 font-bold">Add a Toy</h1>
        <form onSubmit={handleAddToy} className="mt-6">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label className="block  font-bold text-gray-600 ">
                Toy name
              </label>
              <input
                id="toyname"
                type="text"
                name="toyname"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label className="block  font-bold text-gray-600 ">
                Seller name
              </label>
              <input
                id="sellername"
                type="text"
                name="sellername"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <div className="flex justify-between gap-3 mt-2">
            <span className="w-1/3">
              <label className="block  font-bold text-gray-600 ">Price</label>
              <input
                id="price"
                type="text"
                name="price"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/3">
              <label className="block  font-bold text-gray-600 ">Rating</label>
              <input
                id="rating"
                type="text"
                name="rating"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/3">
              <label className="block  font-bold text-gray-600 ">
                Available quantity
              </label>
              <input
                id="available-quantity"
                type="text"
                name="available-quantit"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label className="block mt-2  font-bold text-gray-600 ">
            Phoot url
          </label>
          <input
            id="photourl"
            type="text"
            name="photourl"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required=""
          />
          <label className="block mt-2  font-bold text-gray-600 ">
            Seller email
          </label>
          <input
            id="selleremail"
            type="email"
            name="selleremail"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required=""
          />
          <span className="py-3 mt-4">
            <label className="block mt-2  font-bold text-gray-600 ">
              Sub category
            </label>
            <select
              name="subcategory"
              id="subcategory"
              className="border border-gray-100 px-4 py-2 rounded w-full"
            >
              <option value="Marvel Toys">Marvel Toys</option>
              <option value="DC Toys">DC Toys</option>
              <option value="Transformer Toys">Transformer Toys</option>
            </select>
          </span>
          <span className="mt-4">
            <label className="py-3 block mt-3  font-bold text-gray-600 ">
              Descriptions
            </label>
            <textarea
              className="text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              name="description"
              id="description"
              cols="65"
              rows="5"
            ></textarea>
          </span>

          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white  bg-blue-900 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
