import React from "react";

const OurManagement = () => {
	return (
		<div className="mx-[4rem] md:mt-12 mt-5">
			<div className="flex flex-col items-center ">
				<h1 className="text-4xl font-bold mb-2">
					Our&nbsp;<span className="text-[#f1992d]">Management</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{[
					{
						src: "/Images/suratsinghverma.png",
						alt: "president",
						role: "President",
						name: "MR SURAT SINGH VERMA",
					},
					{
						src: "/Images/balbahadur.png",
						alt: "manager",
						role: "Manager",
						name: "MR BALBAHADUR",
					},
					{
						src: "/Images/ajaykumar.png",
						alt: "treasurer",
						role: "Treasurer",
						name: "MR AJAY KUMAR JAIN",
					},
					{
						src: "/Images/akhileshkumar.png",
						alt: "principal",
						role: "Principal",
						name: "DR AKHILESH KUMAR SHARMA",
					},
				].map((member, index) => (
					<div key={index} className="flex flex-col items-center">
						<img
							src={member.src}
							alt={member.alt}
							className="w-60 max-w-xs h-64 rounded-md shadow-md object-contain bg-white"
						/>
						<div className="flex flex-col">
							<span className="text-blue-800">{member.role}</span>
							<span className="font-semibold text-lg">{member.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurManagement;
