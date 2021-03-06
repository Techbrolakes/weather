import Head from "next/head";
import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

export default function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Head>
        <title>Lakeside Weather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading ? (
          <Loader>
            <RingLoader color="#34BBA3" loading={loading} size={150} />
          </Loader>
        ) : (
          <Weather />
        )}
      </main>
    </div>
  );
}

const Loader = styled.div`
  background: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 2s all ease-in;
`;
