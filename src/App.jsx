import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Campus from "./pages/Campus";
import Gallery from "./pages/Gallery";
import Download from "./pages/Download";
import News from "./pages/News";
import { MdKeyboardArrowUp } from "react-icons/md";
import ContactInfo from "./components/ContactInfo";
import Discloser from "./pages/Discloser";

const App = () => {
	return (
		<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<HeroSection />} />
					<Route path="/campus" element={<Campus />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/download" element={<Download />} />
					<Route path="/news" element={<News />} />
					<Route path="/contact" element={<ContactInfo />} />
					<Route path="/Mandatory-Public-Disclosure" element={<Discloser />} />
				</Routes>
				<Footer />
				<div
					className="h-10 w-10 rounded-full bg-[#f1992d] flex right-4 bottom-4 justify-center items-center text-white hover:bg-white hover:text-black text-2xl font-bold hover:border fixed cursor-pointer"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					<MdKeyboardArrowUp />
				</div>
		</div>
	);
};

export default App;
