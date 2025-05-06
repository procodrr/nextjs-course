"use client";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        <img
          className="w-[360px]"
          src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Image
          // loader={({ src, quality, width }) => {
          //   return "anurag";
          // }}
          src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={360}
          height={270}
          alt="ocean-mountain"
          quality={55}
          // unoptimized
        />
      </div>
    </>
  );
};

export default Home;
