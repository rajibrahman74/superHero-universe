
import CountUp from "react-countup";

const Statistics = () => {
  const countUpOptions = {
    start: 0,
    duration: 12,
    useEasing: true,
    separator: ",",
  };

  return (
    <section className="text-gray-600 body-font">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <div className="container px-5 py-16 mx-auto">
        <h2 className="text-lg md:text-4xl font-bold text-center text-black mb-16">
          Our <span className="font-extrabold text-blue-800">Statistics</span>
        </h2>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2 border-2">
            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-gray-900">
              <CountUp key="users" end={12000000} {...countUpOptions} />
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 border-2">
            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-gray-900">
              <CountUp key="subscribes" end={90500} {...countUpOptions} />
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 border-2">
            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-gray-900">
              <CountUp key="downloads" end={11000} {...countUpOptions} />
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 border-2">
            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-gray-900">
              <CountUp key="products" end={100000} {...countUpOptions} />
            </h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;