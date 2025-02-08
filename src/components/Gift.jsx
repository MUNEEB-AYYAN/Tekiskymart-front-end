// import axios from 'axios'
// import React from 'react'

// const Gift = () => {

//   const FetchEx1 = () => {
//     let [data,setData]  = useState([
//         {
//             "id":"",
//             "title":"",
//             "price":0,
//             "description":"",
//             "category":"",
//             "image":"",
//             "rating":{
//                 "rate":"",
//                 "count":0
//             }
//         }])

//     useEffect(()=>{
//       const fetchData =async()=>{
//         const res = await axios.get('https://fakestoreapi.com/products')
//         const dataq = res.data
//         console.log(res);
//         console.log(dataq);
//       }
//         // fetch('https://fakestoreapi.com/products')
//         // .then(res => res.json())
//         // .then((json)=>{
//         //     setData(json)
//         // })
//     },[])

//   return (
//     <div style={{display:"flex",height:"97vh",flexWrap:"wrap"}}>
//         {data.map((obj)=>{
//             return(
//                 <>
//                 <div style={{width:"20%",height:"85%",display:"flex",flexDirection:"column",border:"1px solid black",margin:"15px",padding:"5px"}}>
//                     <img src={obj.image} alt="" height='150' width='150' /> <br />
//                     title:{obj.title} <br /><br />
//                     description : {obj.description} <br />

//                 </div>
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default Gift


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader_1 from "./Loader_1";

// const Gift= () => {
//   const [data, setData] = useState([ ]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   },[]); // Empty dependency array means it runs once when the component mounts.

//   if (loading) return <Loader_1 />;
//   if (error) return <p>Error: {error}</p>;

// return (
//   <div className="p-4">
//     <div className="flex justify-between bg-gray-200 items-center border-b p-2 mb-4">
//         <h2 className="text-xl font-bold">उपहार सामान</h2>
//         <h2 className="text-xl font-bold">GIFT-ITEMS</h2>
//         <h2 className="text-xl font-bold">تحفہ اشیاء</h2>
//     </div>
//   <div>
//   {data.map((obj)=>{
//       return(
//           <>
//           <div className="flex gap-6 justify-around flex-wrap">
//             {data.map((product, index) => (
//               <div key={index} className="flex w-2/12 flex-col border">
//                 <img src={product.image} alt={product.name}
//                   className="w-full h-40 object-contain" />
//                 <div className="p-2">
//                   <h3 className="text-sm font-semibold truncate">{product.name}</h3>
//                   <div className="text-red-500 font-bold">
//                     {product.price} <span className="text-gray-500 line-through">{product.oldPrice}</span>
//                   </div>
//                 </div>
//           </div>
//   ))}
//   </div>
//           </>
//       )
//   })}
//   </div>
//   </div>
//   );
// };

// export default Gift;




import React, { useState, useEffect } from "react";
import axios from "axios";

const Gift = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex justify-between bg-gray-200 items-center border-b p-2 m-4">
        <h2 className="text-xl font-bold">उपहार सामान</h2>
        <h2 className="text-xl font-bold">GIFT-ITEMS</h2>
        <h2 className="text-xl font-bold">تحفہ اشیاء</h2>
     </div>
      {/* <h2>Fetched Data</h2> */}
      {/* <div className="flex gap-6 justify-around flex-wrap">
        {data.map((item) => (
          <div key={item.id}
          className=" border w-2/12"
          >
            <img src={item.image} alt=""
            className="w-full h-40 object-contain "
            />
            <div className="w-10/12 flex flex-col p-1">
              <p className="font-semibold">{item.title}</p>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-3.5 ml-1 my-4 ">
        {data.map((product, index) => (
          <div key={index} className="border rounded-lg w-[15%] m-1 overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{product.title}</h3>
              <div className="text-red-500 font-bold">{product.price} <span className="text-gray-500 line-through">{product.oldPrice}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;