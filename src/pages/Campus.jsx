import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const Campus = () => {
	const pageInfo = {
		pageHeading: "Our Campus",
		pageName: "Campus",
		path: "/campus",
	};
	return (
		<div>
			<HelpingPage pageInfo={pageInfo}></HelpingPage>

			<div className=" md:mx-[4rem]">
				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-col items-center ">
						<h1 className="text-4xl font-bold mb-2">
							Campus&nbsp;<span className="text-[#f1992d]">Facilities</span>
						</h1>
						<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
						<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
					</div>

					{/* Science Laboratories */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									SCIENCE LABORATORIES{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>

								<div className="space-y-4">
									<p>
										Well equipped Physics, Chemistry and Biology laboratories to
										develop inquisitive characters so that they develop to be
										custodians of the environment. The aims of science labs are
										to develop interest in and stimulate curiosity and to
										develop scientific skills and temper so that students can
										understand themselves and the world around them.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/physicslab2.jpg"
									alt="Science Laboratories"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* Classrooms */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row-reverse gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									CLASS ROOMS{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>
								<div className="space-y-4">
									<p>
										There are 50 spacious classrooms linked by a campus wide
										high speed computer network and equipped with appropriate
										audio-visual equipment and resources.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/classroom.png"
									alt="Classrooms"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* Library */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									LIBRARY{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>
								<div className="space-y-4">
									<p>
										"A well informed person is a well educated person. It is a
										sharing and perfected source of information"
									</p>
									<p>
										Our school library endeavors to provide students with
										additional information opportunities. Library collections
										standout around 10,000 books on a variety of subjects and
										has a regular influx of journals periodicals and magazines
										apart a few news papers.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/library.jpg"
									alt="Library"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* Computer Labs */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row-reverse gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									COMPUTER LAB{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>
								<div className="space-y-4">
									<p>
										Four well-equipped computer labs to acquaint the students
										with information technology. Computer education is provided
										to our students to get exposure and access to the world of
										information and create awareness about its uses and the
										latest technology innovations that are going on in the
										world.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/csLab2.jpg"
									alt="Computer Labs"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* ATL Lab */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									ATL (Atal Tinkering Lab){" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>

								<div className="space-y-4">
									<p>
										With a vision to 'Cultivate one Million children in India as
										Neoteric Innovators', Atal Innovation Mission is
										establishing Atal Tinkering Laboratories (ATLs) in schools
										across India. The objective of this scheme is to foster
										curiosity, creativity and imagination in young minds; and
										inculcate skills such as design mindset, computational
										thinking, adaptive learning, physical computing etc.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/atallab.jpg"
									alt="ATL Lab"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center ">
						<h1 className="text-4xl font-bold mb-2">
							SPORTS & &nbsp;
							<span className="text-[#f1992d]">CO-CURRICULAR</span>
						</h1>
						<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
						<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
					</div>

					{/* Scout and Guide */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row-reverse gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									SCOUT AND GUIDE{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>

								<div className="space-y-4">
									<p>
										The mission is to contribute to the education of young
										people, through a value system to help build a better world
										where people are self reliant individuals and play a
										constructive role in society. It aspires to make a student
										trustworthy, loyal, courteous, disciplined, courageous,
										thrifty and pure in thought, word and deed.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/scout1.jpg"
									alt="Scout and Guide"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* Sports */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									SPORTS{" "}
									<div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>
								<div className="space-y-4">
									<p>
										The sporting talents of our school are provided with
										suitable facilities. Sports increase concentration and
										develop problem solving skills and improve self-esteem
										through success and failure. The students learn time
										management skills, social interaction, exercising
										leadership, reliance on team-mates, fighting depression and
										anxiety. The deserving students are given guidance, training
										and logistic support to participate in the zonal and
										inter-zonal competitions.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img
									src="/Images/sports_imze3.jpg"
									alt="Sports"
									className="max-h-full"
								/>
							</div>
						</div>
					</div>

					{/* NCC */}
					<div className="mb-12">
						<div className="flex flex-col lg:flex-row-reverse gap-6">
							<div className="lg:w-1/2">
								<h1 className="text-3xl font-semibold mb-4">
									NCC <div className="w-15 mt-4 h-[.12rem] bg-[#f1992d]"> </div>{" "}
								</h1>
								<div className="space-y-4">
									<p>
										NSC in school - NCC from 01 April 2018. 100 seats have been
										allotted to the Junior Division of which 100 students were
										selected as cadets in the first, second year, in which 50
										cadets of the school have given the examination of 'A'
										certificate on 02 February 2020. A platoon of senior
										division has been approved from July 2020 under which cadets
										will get 'B' certificate. All of which State services have
										special importance.
									</p>
								</div>
							</div>
							<div className="lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center">
								<img src="/Images/ncc_imaze1.jpg" alt="NCC" className="max-h-full" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Campus;
