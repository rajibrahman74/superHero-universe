const SuperHeroStudio = () => {
  return (
    <section className="text-gray-600 body-font">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      <div className="container px-5 py-20 mx-auto">
        <h1 className="text-center text-xl md:text-4xl font-bold text-black pb-16">
          Super Hero&apos;s{" "}
          <span className="font-extrabold text-blue-800">Studio</span>
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-44 mb-8 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.ibb.co/10Yw181/marvel.png"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Marvel Cinematic Universe.
              </h2>
              <p className="leading-relaxed">
                Marvel Studios is a film production company and a subsidiary of
                Marvel Entertainment, which itself is owned by The Walt Disney
                Company. The studio was founded in 1993 as Marvel Films.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-56 mb-8 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.ibb.co/VjggX5S/dc-logo-hm-removebg-preview.png"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Detective Comics
              </h2>
              <p className="leading-relaxed">
                DC Films, also known as DC Extended Universe (DCEU), is a film
                production company and a subsidiary of DC Entertainment, which
                is itself owned by Warner Bros. Pictures. Here is a brief
                overview of DC Films history
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-60 mb-10 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.ibb.co/R6PxXvZ/il-570x-N-1256070126-cr3m-removebg-preview.png"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Star Wars
              </h2>
              <p className="leading-relaxed">
                Star Wars Saga Begins (1977-1983): In 1977, Lucasfilm released
                the groundbreaking film &quot;Star Wars&quot: (later renamed
                &quot;Star Wars: Episode IV - A New Hope&quot;). The space opera
                became a cultural phenomenon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperHeroStudio;
