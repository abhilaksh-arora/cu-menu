import React, { useEffect, useState } from "react";

const Show = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cu-menu-abhilaksh-arora.vercel.app/api/form",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.form);
        setMyData(data.form);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {myData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.type}</p>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
