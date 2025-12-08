import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			{/* Top first Navbar */}

			<div
				className={`bg-gray-800 text-white text-sm transition-all duration-300 ${
					isScrolled ? "hidden" : "block"
				} md:block`}
			>
				<div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-[4rem] py-2 gap-4">
					<div className=" flex gap-4 items-center">
						<div className="flex items-center gap-2">
							<span className="font-semibold">
								<IoCallSharp className="text-lg text-[#f1992d]" />
							</span>{" "}
							+91 9219405028
						</div>
						<div className="flex items-center gap-2">
							<span className="font-semibold">
								<MdEmail className="text-lg text-[#f1992d]" />
							</span>{" "}
							ljpsvm.in@gmail.com
						</div>
						<div className="flex items-center gap-2">
							<FaRegClock className="text-lg text-[#f1992d]" />

							<span className="font-semibold">Opening: 8:00am - 2:00pm</span>
						</div>
					</div>

					{/* navigation top social media icons */}

					<div className="flex text-2xl">
						<Link
							className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
							to=""
						>
							<FaFacebook />
						</Link>
						<Link
							className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
							to=""
						>
							<IoLogoInstagram />
						</Link>
						<Link
							className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
							to="https://www.youtube.com/channel/UCChwAKlyOKYnjL4xNOJn6Iw"
							target="blank"
						>
							<TfiYoutube />
						</Link>
					</div>
				</div>
			</div>

			{/* second logo wala navbar */}

			<div className="flex justify-between mx-[4rem] py-6">
				<div>
					<img
						src="/Images/logo.png"
						alt="Logo"
						className="w-28 h-28 object-contain"
					/>
				</div>

				{/* Contact Section: hide mobile screen or md */}
				<div className="hidden md:flex justify-end gap-4">
			
					<div className="flex gap-2">
						<div className="rounded-full text-gray-300 w-10 h-10 border flex justify-center items-center">
							<IoCallSharp className="text-xl text-[#f1992d]" />
						</div>
						<div>
							<h4 className="text-lg font-medium">Call Now</h4>
							<p className="text-gray-800">+91 9219405028</p>
						</div>
					</div>

				
					<div className="flex gap-2">
						<div className="rounded-full text-gray-300 w-10 h-10 border flex justify-center items-center">
							<MdEmail className="text-xl text-[#f1992d]" />
						</div>
						<div>
							<h4 className="text-lg font-medium">Send Message</h4>
							<h5 className="text-gray-600">ljpsvm.in@gmail.com</h5>
						</div>
					</div>

					<div className="flex gap-2">
						<div className="rounded-full text-gray-300 w-10 h-10 border flex justify-center items-center flex-shrink-0">
							<FaLocationDot className="text-lg text-[#f1992d]" />
						</div>
						<div>
							<h4 className="text-lg font-medium">Our Location</h4>
							<p className="text-gray-800">
								Jagdishpuram, State Highway 12A,
								<br />
								Muzaffarnagar, Uttar Pradesh 251001
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navbar */}
			<div
				className={`bg-[#f6f6f6] w-full z-50 transition-all duration-300 ${
					isScrolled ? "fixed top-0" : "relative"
				}`}
			>
				<div className="max-w-7xl mx-[4rem] flex justify-between items-center h-16">
					{/* Desktop Menu */}
					<div className="hidden md:flex font-medium gap-2 h-16">
						<NavLink
							to="/"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							HOME
						</NavLink>
						<NavLink
							to="/campus"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							CAMPUS
						</NavLink>
						<NavLink
							to="/gallery"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							GALLERY
						</NavLink>
						<NavLink
							to="/download"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							DOWNLOAD
						</NavLink>
						<NavLink
							to="/news"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							NEWS AND EVENTS
						</NavLink>
						<NavLink
							to="/Mandatory-Public-Disclosure"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							MANDATORY PUBLIC DISCLOSURE
						</NavLink>
					</div>

					<div className="text-xl font-bold">
						<NavLink to="/contact" className="flex bg-[#f1992d] px-8 py-4 rounded-full text-white hover:bg-white hover:text-black text-sm">
							{" "}
							<FaPen className="mt-1 mx-1" /> CONTACT NOW
						</NavLink>
					</div>

					{/* Mobile Menu Icon */}
					<div className="md:hidden">
						<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden px-4 pb-4">
						<NavLink to="/" className="block py-2 border-b">
							HOME
						</NavLink>
						<NavLink to="/campus" className="block py-2 border-b">
							CAMPUS
						</NavLink>
						<NavLink to="/gallery" className="block py-2 border-b">
							GALLERY
						</NavLink>
						<NavLink to="/download" className="block py-2 border-b">
							DOWNLOAD
						</NavLink>
						<NavLink to="/news" className="block py-2 border-b">
							NEWS AND EVENTS
						</NavLink>
						<NavLink
							to="/Mandatory-Public-Disclosure"
							className="block py-2 "
						>
							MANDATORY PUBLIC DISCLOSURE
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
