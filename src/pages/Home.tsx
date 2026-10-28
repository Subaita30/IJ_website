import "../index.css";
import ConsultService from "./consultService";
import { useEffect, useState, useRef } from "react";

import brand1 from "../assets/brand1.jpeg";
import brand2 from "../assets/brand2.jpeg";
import brand3 from "../assets/brand3.jpeg";
import brand4 from "../assets/brand4.jpeg";
import brand5 from "../assets/brand5.jpeg";
import brand6 from "../assets/brand6.jpeg";
import brand7 from "../assets/brand7.jpeg";
import brand8 from "../assets/brand8.jpeg";
import brand9 from "../assets/brand9.jpeg";
import brand10 from "../assets/brand10.jpeg";
import brand11 from "../assets/brand11.jpeg";
import brand12 from "../assets/brand12.jpeg";
import brand13 from "../assets/brand13.jpeg";
import brand15 from "../assets/brand14.jpeg";
import ij_about from "../assets/ij_about.jpg";

import { Link } from "react-router-dom";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaLinkedinIn,
//     FaTiktok,
//     FaYoutube,
// } from "react-icons/fa6";
// import Navbar from "../navigation/Navbar";

// const socials = [
//     {
//         name: "Facebook",
//         url: "https://www.facebook.com/YOUR_USERNAME",
//         Icon: FaFacebookF,
//     },
//     {
//         name: "Instagram",
//         url: "https://www.instagram.com/YOUR_USERNAME",
//         Icon: FaInstagram,
//     },
//     {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/YOUR_USERNAME",
//         Icon: FaLinkedinIn,
//     },
//     {
//         name: "TikTok",
//         url: "https://www.tiktok.com/@YOUR_USERNAME",
//         Icon: FaTiktok,
//     },
//     {
//         name: "YouTube",
//         url: "https://www.youtube.com/@YOUR_USERNAME",
//         Icon: FaYoutube,
//     },
// ];
const images= [
                    { name: "Brand 1", src: brand1 },
                    { name: "Brand 2", src: brand2 },
                    { name: "Brand 3", src: brand3 },
                    { name: "Brand 4", src: brand4 },
                    { name: "Brand 5", src: brand5 },
                    { name: "Brand 6", src: brand6 },
                    { name: "Brand 7", src: brand7 },
                    { name: "Brand 8", src: brand8 },
                    { name: "Brand 9", src: brand9 },
                    { name: "Brand 10", src: brand10 },
                    { name: "Brand 11", src: brand11 },
                    { name: "Brand 12", src: brand12 },
                    { name: "Brand 13", src: brand13 },
                    { name: "Brand 14", src: brand15 },
                ]
function Home() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

        const sectionRef = useRef<HTMLElement | null>(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
            },
            {
            threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
        }, []);
  
    return (
        <main className="mx-auto max-w-[1440px] min-h-screen overflow-hidden bg-[#F9FAFB] text-[#223752]">


            {/* Hero portrait */}
            <section className="px-4 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-12">
                <div className="relative">



                    {/* Image with overlapping typography */}

                    <div className="relative isolate mx-auto h-[570px] max-w-[1440px] overflow-hidden rounded-sm lg:h-[680px]">

                        {/* Centered full portrait */}
                        <img
                            src="https://imtiajjehad.com/wp-content/uploads/2025/05/1234-1008.png"
                            alt="Portrait of Imtiaj Jehad"
                            className="absolute inset-0 z-0 h-full w-full object-contain object-center"
                        />

                        {/* Upper-left headline */}
                        <div className="absolute left-4 top-7 z-10 sm:left-8 sm:top-10 lg:left-12 lg:top-12">
                            <h1 className="text-[clamp(2rem,6.5vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-black">
                                Turning
                                <br />
                                <span className="text-[#D2223E]">Bold Ideas</span>
                            </h1>
                        </div>

                        {/* Lower-right headline */}
                        <div className="absolute bottom-5 right-4 z-10 text-right sm:bottom-40 sm:right-8 lg:bottom-12 lg:right-10">
                            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-black">
                                Into Business
                                <br />
                                <span className="text-[#D2223E]">Growth.</span>
                            </h2>
                        </div>

                    </div>


                    {/* Supporting text */}
                    <div className="mt-8 grid gap-6 border-b border-[#D7DDE5] pb-8 md:grid-cols-[1.4fr_0.6fr] md:items-center md:gap-10 lg:mt-10 lg:gap-16">
                        <p className="ml-4 max-w-3xl text-base leading-8 text-[#526174] sm:ml-8 sm:text-xl lg:ml-12 lg:text-2xl">
                                I am Imtiaj Jehad — a marketing strategist and entrepreneur
                                helping brands grow through creative thinking, strategic
                                marketing, and technology.
                        </p>

                        
                        {/* CTA Buttons: normal position first, fixed after scrolling */}
                        <div
                        className={
                            isScrolled
                            ? "fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:right-6"
                            : "relative z-20 mx-4 flex flex-col items-end gap-3 sm:mx-8 lg:mx-12"
                        }
                        >
                        <Link
                            to="/services"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C2D0E1] px-5 py-3 text-sm font-semibold text-black shadow-md transition duration-300 hover:bg-[#223752] hover:text-white"
                        >
                            Explore Services <span aria-hidden="true"></span>
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#223752] bg-[#F9FAFB] px-5 py-3 text-sm font-semibold text-[#223752] shadow-md transition duration-300 hover:border-[#D2223E] hover:bg-[#D2223E] hover:text-white"
                        >
                            Let's Talk <span aria-hidden="true"></span>
                        </Link>
                        </div>


                    </div>

                    {/* Social links and footer label */}
                    {/* <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">


                        <div className="flex items-center gap-3">
                            {socials.map(({ name, url, Icon }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    title={name}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0C4] text-[#403B34] transition hover:-translate-y-1 hover:border-[#9C603B] hover:bg-[#9C603B] hover:text-white"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div> */}
                </div>

            </section>
                        
            {/* L-shaped cards section */}
            <section className="px-4 py-6 sm:px-0 lg:px-12 lg:py-0">

            {/* Top row: two cards + statement */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {/* Card 1 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#D2223E] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-8xl font-bold tracking-tight text-white">
                    10+
                </h3>
                <h1 className="text-xl font-semibold tracking-tight text-white">
                    Years of experience running a marketing and tech company

                </h1>
                </div>

                {/* Card 2 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#223752] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            
                <h3 className="text-8xl font-bold tracking-tight text-white">
                    400+
                </h3>
                <h1 className="text-xl font-semibold tracking-tight text-white">
                    Clients served


                </h1>
                </div>

                {/* Statement in the upper-right space */}
                <div className="flex flex-col justify-center py-6 lg:pl-6">
                
                <h2 className="cardText text-4xl font-bold font-style:italic leading-tight tracking-tight sm:text-3xl">
                     Turning innovative ideas into impactful results through creative marketing, technology, and strategic business solutions.
                   
                </h2>
                
                </div>
            </div>

            {/* Bottom row: three horizontal cards */}
            <div className="mt-5 grid gap-5 md:grid-cols-3">

                {/* Card 3 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#ADBCDC] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-7xl font-bold tracking-tight text-[#28251F]">
                    7,000+
                </h3>
                <h1 className="text-xl font-semibold tracking-tight text-black">
                    Creative copies written for social media


                </h1>
                </div>

                {/* Card 4 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#E9E9E9] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-7xl font-bold tracking-tight text-[#28251F]">
                    50+
                </h3>
                <h1 className="text-xl font-semibold tracking-tight text-black">
                    OVCs, documentaries, and music films directed

                </h1>
                </div>

                {/* Card 5 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#223752] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-7xl font-bold tracking-tight text-white">
                    $6M+
                </h3>
                <h1 className="text-xl font-semibold tracking-tight text-white">
                     Paid ads managed

                </h1>
                </div>
            </div>
            </section>

                        
            {/* Brands Marquee Section */}
            <section className="overflow-hidden py-10">
            {/* Section Heading */}
            <h2 className="mb-8 text-center text-3xl italic text-[#D2223E] sm:text-2xl">
                Brands I've worked with
            </h2>

            {/* Moving Logos */}
            <div className="group w-full overflow-hidden">
            <div className="grid w-max grid-flow-col auto-cols-max animate-marquee-right gap-5 group-hover:[animation-play-state:paused]">
                {/* Original logos */}
                {images.map((brand, index) => (
                <div
                    key={`brand-${index}`}
                    className="flex shrink-0 items-center justify-center"
                >
                    <img
                    src={brand.src}
                    alt={brand.name}
                    title={brand.name}
                    className="h-18 w-26 max-w-none object-contain"
                    />
                </div>
                ))}

                {/* Duplicate logos for seamless scrolling */}
                {images.map((brand, index) => (
                <div
                    key={`duplicate-${index}`}
                    className="flex shrink-0 items-center justify-center"
                    aria-hidden="true"
                >
                    <img
                    src={brand.src}
                    alt=""
                    className="h-18 w-26 max-w-none object-contain"
                    />
                </div>
                ))}
            </div>
            </div>
            </section>

                        
            {/* About Introduction Section */}
            <section className="px-4 py-14 sm:px-8 lg:px-12">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

                {/* Left: Image */}
                <div className="group relative">
                <div className="overflow-hidden rounded-xl">
                    <img
                    src={ij_about}
                    alt="Imtiaj Jehad"
                    className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[480px] lg:h-[560px]"
                    />
                </div>

                {/* Decorative accent */}
                <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-[#D2223E]/15 sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-32" />
                </div>

                {/* Right: Text */}
                <div className="flex flex-col items-start">

                <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-[#223752] sm:text-4xl lg:text-5xl">
                    More Than Marketing
                    <span className="mt-2 block text-[#D2223E]">
                    A Mindset for Growth.
                    </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#526174] sm:text-lg">
                    I believe meaningful growth begins with the right mindset, combining creative 
                    thinking, strategic marketing, and technology to build stronger brands and 
                    achieve lasting results. Over the past 10 years, I have grown into a creative,
                    results-driven marketing professional who lives and breathes marketing. From
                    developing innovative ideas and creating engaging brand experiences to executing
                    impactful campaigns, I am passionate about connecting businesses with their 
                    audiences. Throughout this journey, I have written 7,000+ copies, collaborated 
                    with 400+ brands, directed 50+ AVs, OVCs, and music films, managed $6M+ in
                    digital advertising spend, executed 500+ marketing campaigns, worked across 
                    five countries, organized 100+ events, and created content for 200+ websites.
                </p>

                <Link
                    to="/about"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#223752] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#D2223E]"
                >
                    Discover My Story
                    <span aria-hidden="true"></span>
                </Link>
                </div>

            </div>
            </section>

            <section
            ref={sectionRef}
            className="bg-[#F9FAFB] px-5 py-16 sm:px-8 lg:px-12"
            >
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Left side */}
                <div className="flex items-center gap-5">
                <span className="text-[150px] font-bold leading-none text-[#223752] sm:text-[180px]">
                    3
                </span>

                <div>
                    <h2 className="font-serif text-3xl font-bold text-[#D2223E] sm:text-4xl">
                    Ways I Can Help You
                    </h2>

                    <p className="mt-5 max-w-md text-justify leading-relaxed text-black">
                    Make your business growth 4x faster or build your brand's
                    sustainability with personalized consulting, creative
                    marketing, and tech services.
                    </p>
                </div>
                </div>

                {/* Right side: animated service cards */}
                <div className="flex flex-col gap-5">
                {[
                    {
                    title: "One-on-One Consultation",
                    service: "consultation",
                    },
                    {
                    title: "Build A Dedicated Team for You within My Team",
                    service: "dedicated-team",
                    },
                    {
                    title: "Partner as Your Full-Service Marketing Agency",
                    service: "marketing-agency",
                    },
                ].map((item, index) => (
                    <Link
                    key={item.service}
                    to={`/services#${item.service}`}
                    className={`group flex min-h-[64px] items-center justify-center gap-3 rounded-xl border border-[#223752] px-4 py-4 text-center text-base text-[#223752] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#D2223E] hover:bg-[#223752] hover:text-white sm:text-lg ${
                        isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-12 opacity-0"
                    }`}
                    style={{
                        transitionDelay: isVisible ? `${index * 250}ms` : "0ms",
                    }}
                    >
                    <span className="shrink-0 font-bold text-[#D2223E] transition-colors group-hover:text-white">
                        →
                    </span>

                    <span>{item.title}</span>
                    </Link>
                ))}
                </div>

            </div>
            </section>
           
            <ConsultService />
           


        </main>
    );
}

export default Home;
