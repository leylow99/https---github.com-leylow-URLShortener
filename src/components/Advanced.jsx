import brand from "../assets/icon-brand-recognition.svg";
import records from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";

export default function Advanced() {
  return (
    <>
      <section className="bg-gray-100 pt-16 pb-10 lg:pb-40">
        <div className="max-width px-5 lg:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-center mb-10 lg:mb-20">
            Track how your links are performing across the web <br className="hidden lg:inline-block" />
            with our advanced statistics dashboard
          </p>

          {/* Cards Container */}
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Vertical Line for Larger Screens
            <div className="hidden lg:block absolute inset-0 left-1/2 w-1 bg-blue-500 transform -translate-x-1/2 h-full"></div> */}

            {/* Brand Recognition Card */}
            <article className="bg-white p-6 rounded-lg shadow-lg relative">
              <img
                src={brand}
                alt="Brand Recognition Icon"
                className="p-3 bg-slate-800 rounded-full w-12 h-12 mx-auto md:mx-0 -mt-16"
              />
              <h3 className="text-slate-800 text-lg mb-2 mt-5 font-bold text-center md:text-left">
                Brand Recognition
              </h3>
              <p className="text-slate-400 text-sm text-center md:text-left">
                Boost your brand recognition with each click. Generic links do
                not mean a thing. Branded links help instill confidence in your
                content.
              </p>
            </article>

            {/* Detailed Records Card */}
            <article className="bg-white p-6 rounded-lg shadow-lg relative md:mt-12 lg:mt-24">
              <img
                src={records}
                alt="Detailed Records Icon"
                className="p-3 bg-slate-800 rounded-full w-12 h-12 mx-auto md:mx-0 -mt-16"
              />
              <h3 className="text-slate-800 text-lg mb-2 mt-5 font-bold text-center md:text-left">
                Detailed Records
              </h3>
              <p className="text-slate-400 text-sm text-center md:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            {/* Fully Customizable Card */}
            <article className="bg-white p-6 rounded-lg shadow-lg relative md:mt-24 lg:mt-40">
              <img
                src={fully}
                alt="Fully Customizable Icon"
                className="p-3 bg-slate-800 rounded-full w-12 h-12 mx-auto md:mx-0 -mt-16"
              />
              <h3 className="text-slate-800 text-lg mb-2 mt-5 font-bold text-center md:text-left">
                Fully Customizable
              </h3>
              <p className="text-slate-400 text-sm text-center md:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
