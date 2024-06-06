"use client";
import Button from "@/_components/Button";
import DataArea from "@/_components/DataArea";
import PageHeading from "@/_components/PageHeading";
import { GET_END_POINT } from "@/_constants/endpoint";
import { PostType } from "@/_types/types";
import Link from "next/link";
import { useState } from "react";

const Get = () => {
  const [results, setResults] = useState<Array<PostType>>([]);

  const getData = () => {
    fetch(GET_END_POINT)
      .then((res) => res.json())
      .then((json) => setResults(json))
      .catch((e) => alert(e.message));
  };

  const resetData = () => {
    setResults([]);
  };

  console.log(results);

  return (
    <>
      <PageHeading title="GETページ" />
      <div className="pt-14 mb-10 flex justify-center items-center gap-4">
        <Button label="GET by fetch" clickHandler={getData} />
      </div>
      <div className="mb-10 flex justify-center items-center gap-4">
        <Button label="RESET" clickHandler={resetData} />
      </div>
      <DataArea results={results} />

      <div className="mt-10 flex justify-center items-center gap-4">
        <Link href={"/"}>
          <Button label="戻る" />
        </Link>
      </div>
    </>
  );
};

export default Get;
