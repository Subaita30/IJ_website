import { Link } from "react-router-dom";

// Replace these image paths with your actual images.
import IJ1 from "../assets/ij1.jpg";
import IJ2 from "../assets/ij2.jpg";
import IJ3 from "../assets/ij3.jpg";
import IJ4 from "../assets/ij4.jpg";

const services = [
  {
    id: "marketing-communications",
    title: "Marketing & Communications Consultant",
    image: IJ1,
    path: "/services/marketing-communications",
  },
  {
    id: "marketing-advisor",
    title: "Marketing Advisor",
    image: IJ2,
    path: "/services/marketing-advisor",
  },
  {
    id: "creative-campaign",
    title: "Creative Campaign Planner",
    image: IJ3,
    path: "/services/creative-campaign",
  },
  {
    id: "paid-media",
    title: "Paid Media Growth Hacker",
    image: IJ4,
    path: "/services/paid-media",
  },
];

function ConsultService() {
  return (
    <section className="bg-[#D7D7D7] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1600px]">

        {/* Centered heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#364153] sm:text-4xl lg:text-5xl">
            One-on-One 
          <span className="text-[#D2223E]"> Consultation </span>
        </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-black/90 sm:text-base">
            I help entrepreneurs, businesses, and nonprofits streamline
            their marketing efforts for business growth.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-md bg-[#F9FAFB] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* White area: title and button only */}
              <div className="flex flex-1 flex-col items-center px-5 py-6 text-center">
                
                <Link
                  to={service.path}
                  className="mt-5 inline-flex items-center justify-center rounded-sm bg-[#223752] px-6 py-3 text-sm font-semibold tracking-[0.15em] text-white transition hover:bg-[#D2223E] focus:outline-none focus:ring-2 focus:ring-[#D2223E] focus:ring-offset-2"
                >
                  EXPLORE
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ConsultService;