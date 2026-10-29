
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const realtorSocials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/YOUR_REALTOR_USERNAME",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/YOUR_REALTOR_USERNAME",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/YOUR_REALTOR_USERNAME",
    Icon: FaLinkedinIn,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@YOUR_REALTOR_USERNAME",
    Icon: FaTiktok,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@YOUR_REALTOR_USERNAME",
    Icon: FaYoutube,
  },
];

function Realtor() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
          Meet Your Realtor
        </p>

        <h1 className="mt-4 text-4xl font-bold text-gray-950 sm:text-5xl">
          Connect With Me
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Follow my professional accounts for property insights,
          real estate updates, market knowledge, and helpful tips
          for your next property decision.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {realtorSocials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-800 transition hover:border-amber-600 hover:bg-amber-50"
            >
              <Icon size={20} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Realtor;
