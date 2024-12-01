import React from "react";
import sample1 from "../../assets/images/sample1.jpg";
import sample2 from "../../assets/images/sample2.jpg";
import sample3 from "../../assets/images/sample3.jpg";

const AboutPage = () => {
  const heroImagePath = sample3;

  return (
    <div className="min-h-screen font-montserrat">
      {/* Hero Section */}
      <section className="relative w-full" style={{ height: "50vh" }}>
        {/* Background Image */}
        <img
          src={heroImagePath}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white flex-col px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About us</h1>
          <p className="text-sm md:text-lg">
            Global Environmental Consultancy And Research Centre dealing in
            various sectors of Environmental Monitoring & Analysis, Different
            types of Chemical & biological Testing, Baseline studies & social
            Survey for EIA, EMP and Environmental Auditing.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col-reverse md:flex-row items-start md:space-x-8 gap-2 mb-4">
          {/* Text Section */}
          <div className="md:w-2/3 text-left order-2 md:order-1">
            <p className="text-base md:text-lg text-gray-600 text-justify font-semibold">
              We "GLOBAL ENVIRONMENTAL CONSULTANCY AND RESEARCH CENTRE",
              established in the year 2015. GECRC is a Quality Monitoring &
              Analysis, Engineering & Technology oriented Company having a
              highly qualified and experienced team of Chemist, Scientist &
              Engineers in the field of Chemical, Biological, Environmental,
              Agricultural, Civil, Computer Science & GIS & Remote Sensing with
              latest infrastructure facilities.
            </p>
            <br />
            <p className="text-base md:text-lg text-gray-600 text-justify">
              We "GECRC" mainly deal with Sampling & Analysis of Environmental
              Samples in Chemical & Biological fields like as Ambient Air, Work
              Zone/ Indoor Air, Stack Emission, Noise, Waste Water, Soil,
              Hazardous Waste Analysis, Drinking Water, Surface Water, Ground
              water, different types of Fertilizers, different types of Ores &
              Minerals, Solid Fuels (Coal, Coke, Briquettes, Oil Shale), Heavy
              Metals in Water & waste water etc.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 items-end order-1 md:order-2 mb-6 md:mb-0">
            <img
              src={sample1}
              alt="About Us"
              className="w-[491px] h-[276px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start md:space-x-8 mt-4 gap-4">
          {/* Text Section */}
          <div className="md:w-2/3 text-left order-2 md:order-2">
            <p className="text-base md:text-lg text-gray-600 text-justify font-semibold">
              GECRC also deals in the Design & Drawing, Engineering Supervision,
              Construction, Modification, Renovation, Supply, Erection, Testing
              & Commissioning of Sewage Treatment Plant (STP), Effluent
              Treatment Plant (ETP), Common Effluent Treatment Plant (CETP),
              Compact/ containerized STP/ ETP, Water Treatment Plant (WTP), Rain
              Water Harvesting (RWH) Pits, Solid & e-Waste Management, Air
              Pollution Control System (APCS), Operation & Maintenance (O&M) of
              STP/ ETP/ CETP/ WTP, Preparing DPR, EMP & Project report, Securing
              NOC for Consent to Establish, Operate & Renewal from SPCB & Other
              Civil/ Environmental Consultancy Services.
            </p>
            <br />
            <p className="text-base md:text-lg text-gray-600 text-justify">
              We "GECRC" design and develop all our products with utmost
              prominence as per the established industrial quality guidelines by
              making use of high-grade basic material and advanced technology.
              Basic material which we use is procured from the distinctive
              vendors of the markets. We "GECRCC" believe in achieving utmost
              customer satisfaction, therefore, clients are provided with
              optimum quality standards of products and services. We want to
              attain a huge clientele from all across the globe on behalf of our
              quality products & services.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 items-end order-1 mb-6 md:mb-0">
            <img
              src={sample2}
              alt="About Us"
              className="w-[528px] h-[388px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 font-montserrat underline">
            Our Vision
          </h2>
          {/* Text */}
          <p className="text-sm md:text-lg text-gray-700 text-justify">
            <span className="font-bold underline">
              Excellence in Environmental Sustainability
            </span>
            <br />
            Development necessary for the Modern Society to improve the living
            standards of human beings but without harming the nature's regime.
            GECRC Lucknow has the Vision to Ensure the sustainable development.
            <ul className="ml-7 mt-2">
              <li>
                a.{" "}
                <span className="font-bold underline">Profitable market</span>-
                Profit is a financial benefit that is realized when the amount
                of revenue gained from a business activity exceeds the expenses,
                costs and taxes needed to sustain the activity.
              </li>
              <li>
                b.{" "}
                <span className="font-bold underline">Healthy communities</span>
                - Healthy communication is a beneficial for both that is
                realized when the amount of revenue gained from a business
                activity.
              </li>
              <li>
                c.{" "}
                <span className="font-bold underline">Environmental limit</span>
                - It's our responsibility to the enviroment to have the certain
                limits for related activity so we need to maintain this by limit
                area.
              </li>
              <li>
                d. <span className="font-bold underline">Innovation</span>-
                Innovation is the mother of necessity so creative and innovative
                ideas make us good consultants.
              </li>
            </ul>
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 font-montserrat underline">
            Our Mission
          </h2>
          {/* Text */}
          <p className="text-sm md:text-lg text-gray-700 text-justify">
            GECRC is a Multi-Disciplinary Environmental Consultancy offering
            expertise in the Built and Natural Environment both on Provincial
            and National levels. GECRC Assess and Mitigate Potential
            Environmental Risks and provide Management Plans in Order to develop
            Trusted Service for its Clients and to keep its Vision. The Seamless
            advice of Experts at GECRC including Environmentalist, Engineers and
            Sociologists to the Proponents on their Projects confer a Fearless
            and a Wonderful Experience.
          </p>
          <br />
          <p className="text-sm md:text-lg text-gray-700 text-justify">
            The Company has implemented a Quality Management System and
            Continuously Striving to Follow the QCI and ISO Standards. As the
            means of fulfilling our Commitment to meet the Client's
            requirements, the Quality System encompasses all activities right
            from Initial Enquiry of the proposal to the Consultancy Rendered
            counterchecked by the Reviews and Feedback of Clients and Regulatory
            Authorities. Quality has been adopted as a Core Responsibility of
            all Staff members of Company to implement the Policies and
            Procedures laid down by the Management vide Standard Operating
            Procedures. The Stated Objectives of the Quality Management System
            are to:
          </p>
          <ol className="text-sm md:text-lg text-gray-700 ml-7 mt-2 text-justify">
            <li>Ensure the High Quality of Consultancy Service</li>
            <li>Meeting the standards most precisely</li>
            <li>Ensure timely delivery of service</li>
            <li>
              Ensure the compliance of recommendations of regulatory authorities
            </li>
            <li>Retain clients</li>
          </ol>
          <br />
          <p className="text-sm md:text-lg text-gray-700 text-justify">
            Client's Feedback is always welcome. All Feedbacks are graded as
            good, very good or excellent. Our Management System Reviews and
            Evaluate the Last Performances Including Formal Internal Audits
            through the Documented Reviews by our Senior Management Officials.
            All Necessary Actions are followed in the Normal Course to Maintain
            Standards and to Ensure Continuous Improvement. The overall
            Responsibility for Ensuring the Implementation of Policy rests with
            the Management of the Company.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
