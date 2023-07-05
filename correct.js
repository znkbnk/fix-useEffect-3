//correct 

import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, [count]);

  useEffect(() => {
    console.log("Count updated:", count);
    return () => {
      console.log("Component unmounted or dependency changed");
    };
  }, [count]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <h1>My Component</h1>
      <p>Count: {count}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
