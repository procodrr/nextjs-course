// "use client";

import { useState } from "react";

export default function Likes() {
  const [likesCount, setLikesCount] = useState(0);
  // console.log(window);
  // if (typeof window !== "undefined") {
  //   console.log(window);
  // }

  console.log("Like component");
  return (
    <div
      onClick={() => {
        setLikesCount((prev) => prev + 1);
      }}
    >
      {likesCount} Likes
    </div>
  );
}

// Servers components execute only on the server
// Client components execute on the server as well as on the client
