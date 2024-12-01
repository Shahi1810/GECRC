import React from "react";
import sample1 from "../../assets/images/sample1.jpg";
import sample2 from "../../assets/images/sample2.jpg";
import sample3 from "../../assets/images/sample3.jpg";

const InstrumentsPage = () => {
  const heroImagePath = sample1;
  const services = [
    {
      title: "Atomic Absorption Spectrometer",
      description:
        "Used for analyzing the concentration of metals in samples by measuring the absorption of optical radiation.",
      hoverImage: sample1,
    },
    {
      title: "Gas Chromatography",
      description:
        "A technique used to separate and analyze compounds that can be vaporized without decomposition.",
      hoverImage: sample2,
    },
    {
      title: "Respirable Dust Sampler",
      description:
        "Designed to monitor the concentration of dust particles in the respirable size range in ambient air.",
      hoverImage: sample3,
    },
    {
      title: "Fine Particulate Sampler (PM 2.5)",
      description:
        "Specialized equipment for collecting and measuring fine particulate matter with a diameter less than 2.5 micrometers.",
      hoverImage: sample1,
    },
    {
      title: "Laminar Air Flow",
      description:
        "Provides a sterile environment by ensuring uniform air flow to prevent contamination during sensitive operations.",
      hoverImage: sample2,
    },
    {
      title: "UV Spectrophotometer",
      description:
        "Used to measure the absorbance of ultraviolet light by a sample to determine its concentration or purity.",
      hoverImage: sample3,
    },
    {
      title: "Stack Sampler",
      description:
        "Measures emissions from industrial stacks, ensuring compliance with environmental regulations.",
      hoverImage: sample1,
    },
    {
      title: "Noise Sampler",
      description:
        "Monitors and measures sound levels in various environments to assess noise pollution and its impact.",
      hoverImage: sample2,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      {/* Hero Section */}
      <section className="relative w-full" style={{ height: "50vh" }}>
        <img
          src={heroImagePath}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white flex-col px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Instrumentation
          </h1>
          <p className="text-sm md:text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            scelerisque massa vel erat varius, non scelerisque erat volutpat.
            Sed ut turpis a nunc interdum hendrerit. Integer malesuada auctor
            sapien non efficitur.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 border rounded-xl overflow-hidden shadow-md transition-all duration-300 h-[150px] hover:h-[300px] flex items-center justify-center"
            >
              {/* Title Centered */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold group-hover:opacity-0 transition-opacity duration-300">
                  {service.title}
                </h3>
              </div>
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <img
                  src={service.hoverImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-20 transition-opacity duration-300"
                />
                <p className="text-sm z-10">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InstrumentsPage;
