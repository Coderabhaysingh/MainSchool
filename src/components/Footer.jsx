import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
	return (
		<div
			className="relative text-white py-10 px-6 md:px-16 bg-cover bg-center bg-no-repeat p-10"
			style={{
				backgroundImage: "url('/Images/schoolBuilding.jpg')",
				backgroundAttachment: "fixed",
			}}
		>
			{/* background black trans */}
			<div className="absolute inset-0 bg-black opacity-90 z-0"></div>

			<div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
				{/* Left Section */}
				<div className="space-y-4 text-sm">
					<img
						src="/Images/logo.png"
						alt="Logo"
						className="w-28 h-28 object-contain"
					/>
					<p className="flex items-center">
						<FaPhoneAlt className="text-[#f1992d] mr-2" />
						Phone: 9219405028
					</p>
					<p className="flex items-center">
						<FaEnvelope className="text-[#f1992d] mr-2" />
						Email: ljpsvm.in@gmail.com
					</p>
					<p className="flex items-center">
						<FaLocationDot className="text-[#f1992d] mr-2" />
						Address: Jagdishpuram,State Highway 12A,
						Muzaffarnagar,Uttar Pradesh 251001X
					</p>
				</div>

				{/* Right Section */}
				<div>
					<h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
					<div className="w-14 h-[2px] bg-[#f1992d] mb-4" />

					<div className="flex flex-col gap-4">
						<NavLink to="/" className="hover:underline cursor-pointer">
							› Home
						</NavLink>
						<NavLink to="/campus" className="hover:underline cursor-pointer">
							› Campus
						</NavLink>
						<NavLink to="/gallery" className="hover:underline cursor-pointer">
							› Gallery
						</NavLink>
						<NavLink to="/download" className="hover:underline cursor-pointer">
							› Download
						</NavLink>
						<NavLink to="/news" className="hover:underline cursor-pointer">
							› News
						</NavLink>
					</div>
				</div>
			</div>
			<hr className="h-[.1rem] mt-5 bg-white" />
			{/* social media icon */}
			<div className="z-11 relative flex flex-col items-center">
				<div className="flex gap-4 p-2 text-2xl">
					<a
						className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
						href="https://www.facebook.com/lala.jpsvmic.mzn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook />
					</a>

					<a
						className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
						href="https://www.instagram.com/lalajpsvmic?igsh=MXg4dTBuajRka3plMg%3D%3D"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoInstagram />
					</a>

					<a
						className="hover:bg-white hover:text-[#f1992d] rounded-full p-2"
						href="https://www.youtube.com/channel/UCChwAKlyOKYnjL4xNOJn6Iw"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TfiYoutube />
					</a>

				</div>
				<div>
					<h3>
						Developed By{" "}
						<Link
							to="https://www.linkedin.com/in/satyamkumar1a2/"
							target="blank"
							className="text-[#f1992d] font-semibold"
						>
							Satyam Kumar
						</Link>{" "}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
