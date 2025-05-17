import React, { useEffect, useState } from "react";
import HelpingPage from "./HelpingPage";

const News = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [expandedNews, setExpandedNews] = useState(null); // Track which news item is expanded

    const pageInfo = {
        pageHeading: "News And Events",
        pageName: "News",
        path: "/news",
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/news`);
                const data = await response.json();

                // Sort news items by createdAt in descending order (latest first)
                const sortedNews = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setNewsItems(sortedNews);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div>
            <HelpingPage pageInfo={pageInfo} />

            {/* Section Heading */}
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2">
                    News And&nbsp;<span className="text-[#f1992d]">Events</span>
                </h1>
                <div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
                <div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
            </div>

            {/* News Items */}
            <div className="mx-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {newsItems.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
                    >
                        <h1 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h1>
                        <p className="text-sm text-gray-500 mb-4">
                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className="text-sm text-gray-700 whitespace-pre-line flex-grow">
                            {expandedNews === item._id
                                ? item.content // Show full content if expanded
                                : `${item.content.substring(0, 100)}...`} {/* Show preview */}
                        </p>
                        <div className="mt-4">
                            <button
                                onClick={() =>
                                    setExpandedNews(expandedNews === item._id ? null : item._id)
                                } // Toggle expanded state
                                className="px-4 py-2 bg-[#f1992d] text-white rounded-md hover:bg-[#d17f1f] transition-colors duration-300"
                            >
                                {expandedNews === item._id ? "Show Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;