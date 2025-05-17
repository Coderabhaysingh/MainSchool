import React, { useEffect, useState } from "react";
import HelpingPage from "./HelpingPage";
import axios from "axios";

const Discloser = () => {
  const pageInfo = {
    pageHeading: "Mandatory public discloser",
    pageName: "Mandatory public discloser",
    path: "/Mandatory-public-discloser",
  };

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/mandatory` // Adjusted to match the correct endpoint
        );
        setDocuments(response.data);
      } catch (err) {
        setError("Failed to fetch documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <HelpingPage pageInfo={pageInfo} />

      {/* Section Heading */}
      <div className="flex flex-col items-center my-5">
        <h1 className="text-4xl font-bold mb-2">
          &nbsp;
          <span className="text-[#f1992d]">Mandatory public discloser</span>
        </h1>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
      </div>

      {/* Downloads Table */}
      <div className="overflow-x-auto md:mx-[4rem] p-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#f1992d]">
          Mandatory public discloser
        </h2>
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-[#f1992d] text-white">
            <tr>
              <th className="p-3 border text-left">Title</th>
              <th className="p-3 border text-left">Download Link</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((item, i) => (
              <tr className="border-t hover:bg-gray-50" key={i}>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border">
                  <a
                    href={item.fileUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    type="application/pdf"
                  >
                    Click here to download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Discloser;
