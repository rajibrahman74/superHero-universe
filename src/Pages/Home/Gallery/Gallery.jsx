import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";

const Gallery = () => {
  const heroImage = useLoaderData();
  // console.log(heroImage);

  useEffect(() => {
    AOS.init();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <div>
        <h2 className=" text-xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center pb-8">
          Hero&apos;s{" "}
          <span className="text-blue-800 font-extrabold">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroImage.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-none shadow-md overflow-hidden relative flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={index * 100}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageHover(null)}
            >
              <img
                src={image.picture}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover"
                data-aos="flip-left"
                data-aos-duration="800"
              />
              {hoveredIndex === index && (
                <button
                  className="absolute md:top-[115px] md:left-[150px] transform -translate-x-1/2 -translate-y-1/2 border-0 opacity-75 bg-warning hover:bg-black text-white px-6 py-2 rounded"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  Buy Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
