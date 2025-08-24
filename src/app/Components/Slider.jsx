"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to Next Store",
    desc: "Discover premium products, unbeatable deals, and a shopping experience designed just for you.",
    img: "/Niche service marketplace-amico.png",
    btn1: { text: "Shop Now", link: "/shop" },
    btn2: { text: "Learn More", link: "/about" },
  },
  {
    title: "Exclusive Deals Everyday",
    desc: "Save big on your favorite items with daily offers you can’t resist.",
    img: "/Niche service marketplace-pana.png",
    btn1: { text: "Browse Deals", link: "/shop" },
    btn2: { text: "View More", link: "/about" },
  },
  {
    title: "New Arrivals Just In",
    desc: "Be the first to explore our latest collections tailored for you.",
    img: "/Online resume-cuate.png",
    btn1: { text: "See New", link: "/shop" },
    btn2: { text: "Know More", link: "/about" },
  },
  {
    title: "Shop Smart & Fast",
    desc: "Enjoy a seamless shopping experience with fast checkout & delivery.",
    img: "/freepik__upload__87667.png",
    btn1: { text: "Start Shopping", link: "/shop" },
    btn2: { text: "Our Services", link: "/about" },
  },
  {
    title: "Trusted by Thousands",
    desc: "Join our growing community of happy customers worldwide.",
    img: "/freepik__upload__87667.png",
    btn1: { text: "Join Now", link: "/shop" },
    btn2: { text: "Learn Why", link: "/about" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // প্রতি 5 সেকেন্ডে slide change হবে

    return () => clearInterval(interval); // cleanup
  }, []);


  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-32">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  {slides[index].title.split(" ")[0]}{" "}
                  <span className="text-yellow-300">
                    {slides[index].title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-gray-100">
                  {slides[index].desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href={slides[index].btn1.link}
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
                  >
                    {slides[index].btn1.text}
                  </Link>
                  <Link
                    href={slides[index].btn2.link}
                    className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition"
                  >
                    {slides[index].btn2.text}
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={slides[index].img}
                  alt="Hero Banner"
                  className="w-[300px] sm:w-[400px] lg:w-[500px] drop-shadow-2xl rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 ">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-yellow-300" : "bg-white/50"
                  }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
