"use client";
import Button from "@/_components/Button";
import DataArea from "@/_components/DataArea";
import PageHeading from "@/_components/PageHeading";
import { GET_END_POINT, POST_END_POINT } from "@/_constants/endpoint";
import { PostType } from "@/_types/types";
import Link from "next/link";
import { useState } from "react";

const Post = () => {
  const [results, setResults] = useState<Array<PostType>>([]);
  // const [results, setResults] = useState<PostType[]>([]);
  const [userId, setUserId] = useState("0");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const param = {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      title: title,
      body: body,
    }),
    header: {
      "Content-type": "application/json; charaset=UTF-8",
    },
  };

  const postData = (e: any) => {
    e.preventDefault();

    fetch(POST_END_POINT, param)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        resetInputs();
        fetch(`${GET_END_POINT}`)
          .then((res) => res.json())
          .then((json) => setResults(json))
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message));
  };

  const resetData = (e: any) => {
    e.preventDefault();
    setResults([]);
  };

  const resetInputs = () => {
    setUserId("");
    setTitle("");
    setBody("");
  };

  console.log(results);

  return (
    <>
      <PageHeading title="POSTページ" />
      <form onSubmit={(e) => postData(e)}>
        <div className="flex flex-col items-center gap-4 my-4">
          <div>
            <label htmlFor="userId">userId:</label>
            <input
              type="number"
              name="userId"
              id="userId"
              className="bg-black border"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">title:</label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-black border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="body">body:</label>
            <input
              type="text"
              name="body"
              id="body"
              className="bg-black border"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="mb-10 flex justify-center items-center gap-4">
            <Button label="POST" />
          </div>
          <div className="mb-10 flex justify-center items-center gap-4">
            <button onClick={(e) => resetData(e)}>リセット</button>
          </div>
        </div>
      </form>

      <DataArea results={results} />

      <div className="mt-10 flex justify-center items-center gap-4">
        <Link href={"/"}>
          <Button label="戻る" />
        </Link>
      </div>
    </>
  );
};

export default Post;
