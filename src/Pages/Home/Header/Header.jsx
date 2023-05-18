import "./Header.css";

const Header = () => {
  return (
    <section className="py-8 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex-container1">
          <div className="text text-[55px] max-w-[400px] font-bold">
            <h1>
              Explore the World of{" "}
              <span className="whitespace-nowrap text-warning">
                Superheros !
              </span>
            </h1>
          </div>
          <div className="collage-container">
            <div className="collage">
              <img
                className="collage-image1 w-[100%] object-cover"
                src="https://i.ibb.co/8M7s4qW/screen-2.jpg"
                alt="thor"
              />
              <img
                className="collage-image2 w-[100%] object-cover"
                src="https://i.ibb.co/zP6PYMf/images-2.jpg"
                alt="wanda"
              />
              <img
                className="collage-image3 w-[100%] object-cover"
                src="https://i.ibb.co/B3D2Rk4/superman.webp"
                alt="natasha"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;