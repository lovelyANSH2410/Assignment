import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = sessionStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => navigate("/users")}
        className="bg-slate-700 text-white px-3 py-2 rounded-lg"
      >
        ← All Users
      </button>
      <div className="my-10 p-10 bg-slate-100 w-1/2 rounded-lg">
        <div>User Id: {userData?.userId}</div>
        <br />
        <div>Salutation: {userData?.salutation}</div>
        <br />
        <div>Full Name: {userData?.firstName} {userData?.middleName} {userData?.lastName}</div>
      </div>
    </div>
  );
};

export default Details;
