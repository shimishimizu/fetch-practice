import { PostType } from "@/_types/types";
import React from "react";

const DataArea = ({ results }: { results: PostType[] }) => {
  return (
    <ul className="border border-white h-[500px] w-[1000px] mx-auto p-3 overflow-scroll">
      {results.map((item, index) => (
        <li key={index} className="border-b border-white py-2">
          <p className="mb-1">
            <span className="text-orange-200">id:</span>
            {item.id}
          </p>
          <p className="mb-1">
            <span className="text-orange-200">userId:</span>
            {item.userId}
          </p>
          <p className="mb-1">
            <span className="text-orange-200">title:</span>
            {item.title}
          </p>
          <p className="mb-1">
            <span className="text-orange-200">body:</span>
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default DataArea;
