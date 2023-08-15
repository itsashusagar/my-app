"use client";

import React, { useState, useEffect } from "react";

export default async function page() {
  // const [data, setData] = useState([]);

  const response = await fetch("https://dummyjson.com/products");
  const jsonData = await response.json();

  // useEffect(() => {

  //   fetchData();
  // }, []);

  return (
    <div>
      <h2 style={{textAlign:"center" , fontSize:"5rem" , color:"pink"}}>Data Fetching Example</h2>
      <ul>
        {jsonData.products.map((item) => (
          <>
            <div key={item.title}   style={{border:"1px solid pink", padding:"50px", margin: "20px"}}>
              <h1 style={{ textAlign: "center" , paddingBottom:'18px' , fontWeight: "900" , fontSize: "3rem"}}>{item.title}</h1>
              <img
                key={item.id}
                src={item.thumbnail}
                // width={500}
                style={{ paddingLeft: "33%" }}
                alt={item.title}
              />
              <h1 style={{textAlign: "center" , paddingTop:'18px'}}>{item.description}</h1>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

//   <li key={item.id}>{item.body}</li>
