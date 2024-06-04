"use client";
import Button from "@/_components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-[30px] font-bold mb-10">practice</h1>
        <h2 className="text-center text-[25px] font-bold mb-8">fetch</h2>
        <div className="mb-12 flex justify-center items-center gap-8">
          <Link href={"/fetch/get"}>
            <Button label="GETページへ" />
          </Link>
          <Link href={"/fetch/post"}>
            <Button label="POSTページへ" />
          </Link>
          <Link href={"/fetch/delete"}>
            <Button label="DELETEページへ" />
          </Link>
        </div>

        <h2 className="text-center text-[25px] font-bold mb-8">axios</h2>
        <div className="mb-12 flex justify-center items-center gap-8">
          <Link href={"/axios/get"}>
            <Button label="GETページへ" />
          </Link>
          <Link href={"/axios/post"}>
            <Button label="POSTページへ" />
          </Link>
          {/* <Link href={"/delete"}>
            <Button label="DELETEページへ" />
          </Link> */}
        </div>

        <h2 className="text-center text-[25px] font-bold mb-8">
          TanStack Query
        </h2>
        <div className="mb-12 flex justify-center items-center gap-8">
          {/* <Link href={"/tanStackQuery/get"}>
            <Button label="GETページへ" />
          </Link> */}
          {/* <Link href={"/tanStackQuery/post"}>
            <Button label="POSTページへ" />
          </Link> */}
          {/* <Link href={"/delete"}>
            <Button label="DELETEページへ" />
          </Link> */}
        </div>

        <h2 className="text-center text-[25px] font-bold mb-8">SWR</h2>
        <div className="mb-12 flex justify-center items-center gap-8">
          {/* <Link href={"/SWR/get"}>
            <Button label="GETページへ" />
          </Link> */}
          {/* <Link href={"/SWR/post"}>
            <Button label="POSTページへ" />
          </Link> */}
          {/* <Link href={"/delete"}>
            <Button label="DELETEページへ" />
          </Link> */}
        </div>
      </div>
    </>
  );
}
