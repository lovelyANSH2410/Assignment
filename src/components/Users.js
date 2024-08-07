import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const storedUserData = sessionStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      } else {
        try {
          const response = await fetch(
            "http://enl-qa.centralindia.cloudapp.azure.com/assignment/user/userInfo/2",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlckluX3VyZXIiLCJzdWIiOiJqb2huLmRvZSIsImlhdCI6MTY0ODQ5MzYyOSwiZXhwIjoxNjQ4NDk2MjI5fQ.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo",
              },
            }
          );
          const data = await response.json();
          setUserData(data);
          sessionStorage.setItem("userData", JSON.stringify(data));
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-300">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-semibold text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-semibold text-gray-500 uppercase tracking-wider"
              >
                First Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-semibold text-gray-500 uppercase tracking-wider"
              >
                Middle Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-semibold text-gray-500 uppercase tracking-wider"
              >
                Last Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 h-20">
            <tr>
              <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-gray-900">
                {userData?.userId}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-gray-500">
                {userData?.firstName}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-gray-500">
                {userData?.middleName}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-gray-500">
                {userData?.lastName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-right">
        <button
          className="px-3 py-2 my-2 bg-gray-700 text-white rounded-lg"
          onClick={() => navigate("/users/userInfo/2")}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Users;
