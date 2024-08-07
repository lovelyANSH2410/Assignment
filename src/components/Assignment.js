import React from "react";
import { data } from "../data";

const Assignment = () => {
  return (
    <div className="mt-20 mx-24">
      {data?.map((item, index) => (
        <div key={index} className="text-white text-right mt-10">
          <div className="text-lg my-2">{item.menu}</div>
          <div>
            {item.items.map((subItem, subIndex) => (
              <div key={subIndex} className="text-white text-lg my-2">
                {subItem.menuItem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignment;
