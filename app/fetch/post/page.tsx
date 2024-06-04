"use client";
import Button from "@/_components/Button";
import { POST_END_POINT } from "@/_constants/endpoint";
import Link from "next/link";
import { useState } from "react";

const Post = () => {
  type postsTypes = {
    id: number;
    userId: number;
    title: string;
    body: string;
  };

  const [results, setResults] = useState<Array<postsTypes>>([]);

  const param = {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "test title",
      body: "test body",
    }),
    header: {
      "Content-type": "application/json; charaset=UTF-8",
    },
  };
  // ダミーなので実際にPOSTはされない
  const postData = () => {
    fetch(POST_END_POINT, param)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        fetch(`${POST_END_POINT}`)
          .then((res) => res.json())
          .then((json) => setResults(json))
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message));
  };

  const resetData = () => {
    setResults([]);
  };

  console.log(results);

  return (
    <>
      <div className="pt-14 mb-10 flex justify-center items-center gap-4">
        <Button label="POST" clickHandler={postData} />
      </div>
      <div className="mb-10 flex justify-center items-center gap-4">
        <Button label="RESET" clickHandler={resetData} />
      </div>
      <ul className="border border-white h-[500px] w-[1000px] mx-auto p-3 overflow-scroll">
        {results.map((item, index) => (
          <li key={index} className="border-b border-white">
            <p>{item.id}</p>
            <p>{item.userId}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center items-center gap-4">
        <Link href={"/"}>
          <Button label="戻る" />
        </Link>
      </div>
    </>
  );
};

export default Post;
