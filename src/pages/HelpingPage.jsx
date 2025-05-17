import React from "react";
import { NavLink } from "react-router-dom";
const HelpingPage = ({ pageInfo }) => {
	return (
		<div
			className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center"
			style={{
				backgroundImage: `url('/Images/allpagebg.jpg')`,
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Text Content */}
			<div className="relative z-10 text-center text-white px-4">
				<h1 className="text-3xl md:text-5xl font-bold mb-4">
					{pageInfo.pageHeading}
				</h1>
				<div className="flex justify-center items-center gap-2 text-lg">
					<NavLink to="/" className="text-white">
						Home
					</NavLink>
					<span className="text-white">›</span>
					<NavLink
						to={pageInfo.path}
						className="bg-[#f1992d] px-3 py-1 rounded text-white"
					>
						{pageInfo.pageName}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HelpingPage;
