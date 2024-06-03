'use client';
import { useState } from "react";

export default function Home() {

  type postsTypes = {
    id: number;
    userId: number;
    title: string;
    body: string;
  };

  const [results, setResults] = useState<Array<postsTypes>>([]);

  // useEffect(() => {
    // }, [])
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(json => setResults(json))
    .catch(() => alert('error'));
  }

  const resetData = () => {
    setResults([]);
  }

  console.log(results)

  return (
    <>
      <div className="pt-24 mb-10 flex justify-center items-center gap-4">
        <button onClick={getData}>GET</button>
        {/* <button onClick={''}>POST</button> */}
        {/* <button onClick={''}>DELETE</button> */}
      </div>
      <div className="mb-10 flex justify-center items-center gap-4">
        <button onClick={resetData}>RESET</button>
      </div>
      <ul className="border border-white h-[500px] w-[1000px] mx-auto p-3 overflow-scroll">
        {results.map((item, index) => (
          <li key={index} className="border-b border-white">
            <p>{item.Id}</p>
            <p>{item.userId}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
