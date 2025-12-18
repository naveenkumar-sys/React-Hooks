import React, { useEffect, useState } from "react";

const useCustomHook = (url) => {
  //here anything will written as generally so that we reuse the component anywhere
  const [data, setData] = useState(null); // setting it null because we write this for all possibilities

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [url]);
  return [data]; // It is act like function so It return function in array format
};

export default useCustomHook;
