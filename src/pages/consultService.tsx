
import { Link } from "react-router-dom";
import servicesBg from "../assets/consult_bg.jpg";

const services = [
  {
    id: "marketing-communications",
    title: "Marketing & Communications",
    description:
      "Build a clear marketing message and connect your brand with the right audience through strategic communication.",
    path: "/services/marketing-communications",
    icon: "code",
  },
  {
    id: "marketing-advisor",
    title: "Marketing Advisor",
    description:
      "Get practical marketing guidance, strategic direction, and a clear plan to support sustainable business growth.",
    path: "/services/marketing-advisor",
    icon: "brain",
  },
  {
    id: "creative-campaign",
    title: "Creative Campaign Planner",
    description:
      "Turn creative ideas into memorable campaigns that strengthen your brand and engage your audience.",
    path: "/services/creative-campaign",
    icon: "chart",
  },
  {
    id: "paid-media",
    title: "Paid Media Growth Hacker ",
    description:
      "Plan smarter advertising campaigns, reach the right people, and improve your marketing return on investment.",
    path: "/services/paid-media",
    icon: "megaphone",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      {...common}
      aria-hidden="true"
    >
      {type === "code" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}
      {type === "brain" && (
        <>
          <path d="M12 5a4 4 0 0 0-7 3 4 4 0 0 0 0 7 4 4 0 0 0 7 3Z" />
          <path d="M12 5a4 4 0 0 1 7 3 4 4 0 0 1 0 7 4 4 0 0 1-7 3Z" />
          <path d="M12 5v14M8 9h1m-2 5h2m7-5h-1m2 5h-2" />
        </>
      )}
      {type === "chart" && (
        <>
          <path d="M4 19V5" />
          <path d="M4 19h17" />
          <path d="M8 15v-4m5 4V7m5 8v-6" />
        </>
      )}
      {type === "megaphone" && (
        <>
          <path d="m3 10 13-5v14L3 14z" />
          <path d="M7 15l2 5h4l-3-4" />
          <path d="M19 9l2-2m-2 9 2 2" />
        </>
      )}
    </svg>
  );
}

function ConsultService() {
  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[760px] lg:px-12 lg:py-20"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {/* Soft overlay keeps text readable */}
      <div className="absolute inset-0 -z-10 bg-[#E9EDF5]/65 backdrop-blur-[2px]" />

      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.95fr_1.65fr] lg:items-center lg:gap-8">
        {/* Left introduction */}
        <div className="max-w-[520px]">
          
          <h2 className="text-5xl font-black leading-[0.86] tracking-[-0.055em] text-[#364153] lg:text-[clamp(3.5rem,5vw,5.8rem)]">
            One-on-One
            <br />
            <span className="text-[#D2223E]">Consultation</span>
            <br />
            
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#263449] sm:text-lg">
             I help entrepreneurs, businesses, and nonprofits streamline
            their marketing efforts for business growth.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex min-h-16 w-full max-w-[480px] items-center justify-center gap-4 rounded-xl border-2 border-[#D2223E] bg-white px-6 py-4 text-base font-semibold text-[#D2223E] transition duration-300 hover:bg-[#D2223E] hover:text-white sm:text-lg"
          >
            Explore All Services
            <span className="text-2xl" aria-hidden="true"></span>
          </Link>
        </div>

        {/* Right service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group min-h-[300px] rounded-2xl border border-white/40 bg-white/20 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-xl sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC8CD] text-[#D2223E]">
                <ServiceIcon type={service.icon} />
              </div>

              <h3 className="mt-6 border-b border-[#8792A3]/70 pb-3 text-xl font-bold tracking-tight text-[#364153] sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-5 text-base leading-6 text-[#364153]">
                {service.description}
              </p>

              <div className="mt-5">  
                <Link
                
                to={service.path}
                className="mt-6 px-3 py-1.5 text-sm font-semibold text-[#D2223E] opacity-100 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-[#D2223E] group-hover:text-white group-hover:rounded-full focus:opacity-100"
              >
                Explore<span aria-hidden="true"></span>
              </Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultService;
