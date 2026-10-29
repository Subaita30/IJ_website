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
import ij5 from "../assets/ij5.png";
import ij6 from "../assets/ij6.png";

import { Link } from "react-router-dom";
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

        const [heroLoaded, setHeroLoaded] = useState(false);

            useEffect(() => {
            const timer = window.setTimeout(() => {
                setHeroLoaded(true);
            }, 100);

            return () => window.clearTimeout(timer);
            }, []);
  
    return (
        <main className="min-h-screen overflow-hidden bg-[#F9FAFB] text-[#223752]">


            {/* Hero portrait */}
            <section className="px-4 pb-12 pt-10 lg:px-12 lg:pt-2">
                <div className="relative">



                    {/* Image with overlapping typography */}

                    <div className="relative isolate h-[570px] overflow-hidden rounded-sm lg:h-[600px]">
                        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D2223E]/20 blur-xl" />
                        <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#223752]/20 blur-xl" />
                        {/* Centered full portrait */}
                        <img
                            src={ij5}
                            alt="Portrait of Imtiaj Jehad"
                            className="absolute inset-0 z-0 h-full w-full object-contain object-center -translate-x-3 -translate-y-4 lg:-translate-x-8 lg:-translate-y-0"
                        />

                        {/* Upper-left headline */}
                        <div
                        className={`absolute left-4 top-7 z-10 transition-all duration-700 ease-out sm:left-8 sm:top-10 lg:left-12 lg:top-12 ${
                            heroLoaded
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-8 opacity-0"
                        }`}
                        >
                        <h1 className="text-[clamp(2rem,6vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-black">
                            Turning
                            <br />
                            <span className="text-[#D2223E]">Bold Ideas</span>
                        </h1>
                        <p className="mt-5 max-w-md text-sm leading-6 text-[#223752] sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
                            I am Imtiaj Jehad - a marketing strategist and entrepreneur
                            helping brands grow through creative thinking, strategic
                            marketing, and technology.
                        </p>
                    </div>

                        {/* Lower-right headline */}
                        <div
                        className={`absolute bottom-42 right-4 z-10 text-right transition-all duration-700 ease-out sm:bottom-50 sm:right-8 lg:bottom-58 lg:right-10 ${
                            heroLoaded
                            ? "translate-y-0 opacity-100 delay-500"
                            : "translate-y-8 opacity-0"
                        }`}
                        >
                        <h2 className="text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-black">
                            Into Business
                            <br />
                            <span className="text-[#D2223E]">Growth</span>
                        </h2>
                        </div>

                    </div>


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
            </section>


            {/* L-shaped cards section */}
            <section className="px-4 py-6 lg:px-12 lg:py-6">

            {/* Top row: two cards + statement */}
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {/* Card 1 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#D2223E] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-7xl font-bold tracking-tight text-white">
                        10+
                    </h3>
                    <h1 className="text-xl font-semibold tracking-tight text-white">
                        Years of experience running a marketing and tech company

                    </h1>
                </div>

                {/* Card 2 */}
                <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-[#223752] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            
                    <h3 className="text-7xl font-bold tracking-tight text-white">
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
            <section className="px-4 py-14 lg:px-12">
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
            

            {/*services*/}
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
           
            
            
            {/* MY APPROACH SECTION */}
            <section
            id="approach"
            className="bg-[#F9FAFB] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
            >
                <div className="mx-auto max-w-[1440px]">
                        {/* Heading and introduction */}
                    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                        

                        <h2 className="text-4xl font-bold tracking-tight text-[#223752] sm:text-5xl lg:text-6xl">
                            From Insight <span className="text-[#D2223E]">to Impact</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg sm:leading-8">
                            I combine strategic thinking, creative execution, and continuous
                            analysis to help businesses move forward with clarity and purpose.
                        </p>

                      <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#D2223E]" /></div>

                        {/* Portrait and six stages */}
                        <div className="grid items-stretch gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                            {/* Portrait */}
                                <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
                                    <div className="absolute -bottom-3 -left-3 h-32 w-32 rounded-tl-[3rem] border-b-2 border-l-2 border-[#D2223E]/70" />

                                    <div className="relative min-h-[420px] overflow-hidden rounded-sm sm:min-h-[560px]">
                                        <img
                                            src={ij6}
                                            alt="Imtiaj Jehad"
                                            className="absolute inset-0 h-full w-full object-contain object-top"
                                        />
                                    </div>
                                </div>

                            {/* Process cards */}
                            <div className="grid content-start grid-cols-1 sm:grid-cols-2">
                            {[
                            {
                                number: "01",
                                title: "Research",
                                description:
                                "Understand the market, audience, and business objectives.",
                            },
                            {
                                number: "02",
                                title: "Data Analysis",
                                description: "Turn insights and data into informed decisions.",
                            },
                            {
                                number: "03",
                                title: "Planning",
                                description: "Build a focused strategy with clear priorities.",
                            },
                            {
                                number: "04",
                                title: "Execution",
                                description:
                                "Bring the strategy to life through purposeful action.",
                            },
                            {
                                number: "05",
                                title: "Monitoring",
                                description:
                                "Track progress and identify opportunities to improve.",
                            },
                            {
                                number: "06",
                                title: "Result Tracking",
                                description: "Measure outcomes and refine the next steps.",
                            },
                            ].map((stage, index) => (
                            <article
                                key={stage.number}
                                className={`group border-[#D7DDE5] py-6 transition-colors duration-300 hover:bg-white sm:px-5 sm:py-7 ${
                                index < 4 ? "border-b" : ""
                                } ${index % 2 === 0 ? "sm:border-r" : ""} ${
                                index >= 4 ? "sm:border-t" : ""
                                }`}
                            >
                                <div className="mb-5 flex items-center justify-between">
                                <span className="text-sm font-semibold tracking-wider text-[#D2223E]">
                                    {stage.number}
                                </span>

                                <span className="h-px w-10 bg-[#D2223E]/50 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D2223E]" />
                                </div>

                                <h3 className="text-xl font-semibold tracking-tight text-[#223752] transition-colors duration-300 group-hover:text-[#D2223E] sm:text-2xl">
                                {stage.title}
                                </h3>

                                <p className="mt-3 max-w-sm text-sm leading-6 text-[#526174] sm:text-base sm:leading-7">
                                {stage.description}
                                </p>
                            </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* END MY APPROACH SECTION */}


        </main>
    );
}

export default Home;
