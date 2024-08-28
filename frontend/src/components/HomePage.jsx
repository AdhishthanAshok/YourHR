import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUserData] = useState(null);

  // Static job data
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Acme Inc.",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Acme Inc.",
      location: "Remote",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      company: "Acme Inc.",
      location: "New York, NY",
      salary: "$50,000 - $65,000",
      type: "Full-time",
      posted: "3 days ago",
    },
  ];

  // Fetch all users
  const fetchInfo = async () => {
    try {
      const response = await fetch("https://yourhr-cyan.vercel.app/allUsers");
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="flex py-4 md:flex-row items-center justify-around  h-auto">
        <img
          src="https://th.bing.com/th/id/OIG2.fsTCR5X8uCigV7ftWoDv?pid=ImgGn"
          alt="YH"
          className="w-20 h-20"
        />
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold text-center">Job Listings</h2>
          <p className="text-muted-foreground hidden md:visible lg:visible">
            Browse our latest job openings and apply today.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white w-auto py-2 px-4 rounded-lg"
          >
            Log Out
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row h-screen">
        {/* Sidebar with User Names */}

        <div className="w-full md:w-1/4 bg-white shadow-md overflow-y-auto no-scrollbar h-auto p-4">
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold mb-4 underline">Users</h2>
            <ul className="space-y-2">
              {allUsers.map((name, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 border-blue-100 border-2 p-2 rounded"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 overflow-y-auto no-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="grid gap-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white shadow-md rounded-lg p-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500">Location</div>
                          <div>{job.location}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500">Salary</div>
                          <div>{job.salary}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500">Job Type</div>
                          <div>{job.type}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500">Posted</div>
                          <div>{job.posted}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <a
                        href="#"
                        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
