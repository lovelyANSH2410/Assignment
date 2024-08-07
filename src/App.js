import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Assignment from "./components/Assignment";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/users");
  }, []);

  return (
    <div className="flex gap-4 h-screen ">
      <div className="bg-gray-800 rounded-r-3xl text-3xl text-center text-white w-[20%] pt-6">
        <p className="border-b border-gray-500 pb-6">Assignment</p>
        <Assignment/>
      </div>
      <div className="shadow-md bg-slate-200 rounded-3xl text-black w-[80%] p-4 px-20">
        <p className="text-center text-3xl pt-6 pb-20">Dashboard - 1</p>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
