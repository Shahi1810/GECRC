import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { MdGavel } from "react-icons/md";
import CountUp from "react-countup";

import sample1 from "../../assets/images/banner.png";
import sample2 from "../../assets/images/sample1.jpg";
import sample3 from "../../assets/images/sample2.jpg";
import sample4 from "../../assets/images/sample3.jpg";
import pic from "../../assets/images/AUDIT.jpg";

export default function Home() {
  const slides = [
    { image: sample1, text: "Our Services" },
    { image: sample2, text: "Innovative Solutions for a Sustainable Future" },
    { image: sample3, text: "Technologies for Environmental Compliance" },
    { image: sample4, text: "Empowering Human Resources with Expertise" },
  ];

    const Blog = [
      {
        id: 1,
        title: "Compliance with ISO/IEC 17025:2017 and Standardized Testing",
        desc: "The laboratory is committed to meeting the requirements of ISO/IEC 17025:2017. All tests are conducted using nationally or internationally recognized standard test methods to ensure accuracy, reliability, and global compliance.",
        icon: <MdGavel/>,
        bgColor: "#0063ff",
        delay: 0.3,
      },
      {
        id: 2,
        title: "Enhancing Customer Satisfaction",
        desc: "Our laboratory prioritizes customer satisfaction by actively seeking continuous feedback and addressing any complaints promptly. Complaints are resolved within one week of receipt, ensuring transparency and maintaining strong client relationships.",
        icon: <FaRegSmile />,
        bgColor: "#28a745",
        delay: 0.6,
      },
      {
        id: 3,
        title: "Commitment to Competence and Continuous Improvement",
        desc: "To ensure technical excellence, the laboratory emphasizes continual improvement through monthly technical training sessions for all personnel. We uphold impartiality and consistency in operations, ensuring every result meets the highest standards of quality.",
        icon: <GiLightBulb />,
        bgColor: "#ff4500",
        delay: 0.9,
      },
      {
        id: 4,
        title: "Quality Monitoring and Participation in Proficiency Testing",
        desc: "The laboratory ensures consistent quality by retesting 5% of retained samples and performing replicate testing on 5% of total samples each month. Regular participation in Proficiency Testing (PT) and Interlaboratory Comparisons (ILC) further strengthens our commitment to quality and reliability.",
        icon: <AiOutlineCheckCircle/>,
        bgColor: "#6c63ff",
        delay: 0.9,
      },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="mx-auto w-full font-montserrat">
      {/* Header Section */}
      <header className="w-full h-[50vh] relative">
        {/* Hero Slider */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            {/* Text Overlay */}
            <div className="text-center text-white space-y-4 px-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                {slides[currentIndex].text}
              </h1>
              <p className="text-sm md:text-lg">
                Discover a wide range of services designed to meet your business
                needs. From digital solutions to personalized strategies, we're
                here to help you succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer ${
                index === currentIndex ? "text-white" : "text-gray-400"
              }`}
            >
              <RxDotFilled size={20} />
            </div>
          ))}
        </div>
      </header>

      {/* Additional Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-10 sm:px-8 md:px-12 space-y-3 lg:space-y-0 gap-10">
        <div className="lg:w-1/2 text-justify lg:text-justify">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-green-600 font-medium underline">
            Quality Policy
          </h1>
          <p className="mt-10 text-lg text-gray-600">
            To meet customer expectations without compromising on quality of
            services provided while adhering to the requirements of ISO/IEC
            17025:2017 standard, applicable statutory and regulatory
            requirements in the areas of Chemical & Biological testing in
            accordance with stated methods, through application of advanced
            technologies and by the development of Human Resources. The
            laboratory shall strive to achieve continuous improvement in its
            various activities. Laboratory ensures that the testing personnel
            familiarize with the quality documentation and implement the
            policies and procedures. Laboratory is committed to competence,
            impartiality, confidentiality & consistent operation in their work.
          </p>
        </div>
        <div className="lg:w-1/2 items-end">
          <img
            className="w-[700px] h-[400px] object-contain rounded-lg"
            src={pic}
            alt="Quality Policy"
          />
        </div>
      </div>

      <div>
        <div className="container py-10">
          {/* Header Section */}
          <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-green-600 font-montserrat">
              Why choose us?
            </h1>
            <p className="font-semibold text-3xl font-montserrat underline">
              Our Quality Objectives
            </p>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-4">
            {Blog.map((item) => {
              return (
                <div className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
                  {/*icon section*/}
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                  >
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-white py-12 m-3 rounded-xl font-montserrat bg-green-700">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center">
            <p>
              <CountUp
                start={0}
                end={300}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p>Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              <CountUp
                start={0}
                end={300}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p>Trained Employees </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              <CountUp
                start={0}
                end={300}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p>Equipments</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              <CountUp
                start={0}
                end={300}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}