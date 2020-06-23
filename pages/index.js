import React, { useState, useEffect } from "react";
import Head from "next/head";

function Remote(data) {
  console.log(data.data.message);
  return <div>{data.data.message}</div>;
}

async function getRemoteData() {
  const data = await fetch("/api/hello");
  return data.json();
}
export default function Home() {
  const [remoteData, setRemoteData] = useState({ message: "Updating" });
  useEffect(() => {
    (async function () {
      const result = await getRemoteData();
      console.log({ result });
      setRemoteData(result);
    })();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Chandan Kumar: Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Next</h1>
      <p>Trying out next</p>
      <Remote data={remoteData} />
    </div>
  );
}
