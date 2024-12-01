import React from "react";
import sample1 from "../../assets/images/sample1.jpg";
import sample2 from "../../assets/images/sample2.jpg";
import sample3 from "../../assets/images/sample3.jpg";

const ServicesPage = () => {
  const heroImagePath = sample2;
  const services = [
    {
      title:
        "Environmental Monitoring and Analysis of Chemicals and Biological Samples",
      description:
        "We test and analyze air, water, soil, and biological samples to ensure a clean and safe environment.",
      hoverImage: sample1,
    },
    {
      title: "ISO Consultation for Certification and Accredition",
      description:
        "We help organizations meet ISO standards, guiding them through certification and accreditation processes.",
      hoverImage: sample2,
    },
    {
      title: "Environmental Auditing",
      description:
        "We conduct thorough environmental audits to assess compliance and improve sustainability practices.",
      hoverImage: sample3,
    },
    {
      title: "Preparation of GIS Maps",
      description:
        "We create detailed GIS maps for accurate data representation and environmental planning.",
      hoverImage: sample1,
    },
    {
      title:
        "Technical Trainings for College Students and Industries Employees",
      description:
        "We provide technical training to students and industry professionals to enhance skills and knowledge.",
      hoverImage: sample2,
    },
    {
      title: "Technical Manpower Supply for Industries, Laboratories etc.",
      description:
        "We supply skilled manpower to industries and laboratories for technical tasks and operations.",
      hoverImage: sample3,
    },
    {
      title: "STP/ETP/WTP/CETP designing and Construction",
      description:
        "We design and build treatment plants for wastewater, sewage, and water purification.",
      hoverImage: sample1,
    },
    {
      title: "Operation and maintenances of STP/ETP/WTP/CETP etc",
      description:
        "We operate and maintain treatment plants to ensure optimal performance and compliance.",
      hoverImage: sample2,
    },
    {
      title: "Rain Water Harvesting system designing.",
      description:
        "We design rainwater harvesting systems to conserve water and promote sustainable use.",
      hoverImage: sample3,
    }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-sm md:text-lg max-w-2xl">
            Discover a wide range of services designed to meet your business
            needs. From digital solutions to personalized strategies, we're here
            to help you succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 border rounded-lg overflow-hidden shadow-md transition-all duration-300 h-[150px] hover:h-[300px] flex items-center justify-center"
            >
              {/* Centered Title */}
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

export default ServicesPage;
