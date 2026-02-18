"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Banner() {
    const router = useRouter();
    const handleAlert = ()=>{
        const promt = prompt("Enter the Password")
        if(promt==1234){
            // alert("Welcome to Ayas")
            router.push("/dashboard")
        } 
    }
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* Background blur circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Modern Apps
            <span className="block text-yellow-300">With Next.js</span>
          </h1>

          <p className="mt-4 text-lg text-white/90 max-w-lg">
            Create fast, scalable, and beautiful web applications using the
            power of Next.js, Tailwind CSS, and modern technologies.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAlert}
              className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-100 transition"
            >
              Get Started
            </button>

            <Link
              href="/learn-more"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-purple-600 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >

        </motion.div>
      </div>
    </section>
  );
}
