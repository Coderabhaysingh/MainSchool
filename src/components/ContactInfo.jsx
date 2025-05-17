import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const ContactInfo = () => {
	return (
		<div className="mx-[4rem] md:mt-12 my-12">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold mb-2">
					Contact&nbsp;<span className="text-[#f1992d]">Information</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6948.800542991803!2d77.7283251!3d29.44632!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390c1ad932120ce9%3A0xb1c481f9f0508e4b!2sLala%20Jagdish%20Prasad%20Saraswati%20Vidya%20Mandir%20CPWH%2BG8G%20Jagdishpuram%20SH%2012A%2C%20Muzaffarnagar%2C%20Uttar%20Pradesh%20251001!3m2!1d29.44632!2d77.72832509999999!5e0!3m2!1sen!2sin!4v1744435417331!5m2!1sen!2sin"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				
				<div className="flex flex-col gap-4">
					<input
						className="outline-none p-2 border"
						type="text"
						placeholder="Enter Name"
					/>
					<input
						className="outline-none p-2 border"
						type="text"
						placeholder="Email Address"
					/>
					<input
						className="outline-none p-2 border"
						type="text"
						placeholder="Website"
					/>
					<textarea
						rows="8"
						className="outline-none p-2 border"
						name=""
						id=""
						placeholder="Comment"
					></textarea>
					<div>
						<button className="bg-[#f1992d] text-white hover:bg-black py-3 px-6">
							POST COMMENT
						</button>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-3 hide gap-6 mt-20">
				<div className="flex gap-6">
					<div className="rounded-full text-gray-300 w-16 h-16 border flex justify-center items-center flex-shrink-0">
						<FaLocationDot className="text-lg text-[#f1992d]" />
					</div>
					<div>
						<h4 className="text-xl font-medium">Location</h4>
						<h5 className="text-gray-600 text-lg font-medium">
							Lala Jagdish Prasad Saraswati Vidya Mandir
						</h5>
						<p className="text-gray-800">
							Jagdishpuram,State Highway 12A, Muzaffarnagar,Uttar Pradesh 251001
						</p>
					</div>
				</div>
				<div className="flex gap-6">
					<div className="rounded-full text-gray-300 w-16 h-16 border flex justify-center items-center flex-shrink-0">
						<MdEmail className="text-2xl text-[#f1992d]" />
					</div>
					<div>
						<h4 className="text-xl font-medium">Email Address</h4>{" "}
						<h5 className="text-gray-600 text-lg font-medium">
							lalajpsvm123mzn@gmail.com
						</h5>
					</div>
				</div>
				<div className="flex gap-6">
					<div className="rounded-full text-gray-300 w-16 h-16 border flex justify-center items-center flex-shrink-0">
						<IoCallSharp className="text-2xl text-[#f1992d]" />
					</div>
					<div>
						<p className="text-lg text-gray-800">+91 9219405028,</p>
						<p className="text-lg text-gray-800">+91 9411670674, </p>
						<p className="text-lg text-gray-800">+91 9837643451</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
