import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://randomuser.me/api/";

function FetchApi() {
  const [data, setdata] = useState();

//   useEffect(() => {
//     const fetchApi = async () => {
//       const response = await fetch(BASE_URL);
//       const data = await response.json();
//       setdata(data.results);
//     };
//     fetchApi();
//   }, []);


    useEffect(() => {
        const fetchApi = async () => {
                const response = await axios.get(BASE_URL)
                setdata(response.data.results)
             
        }
        
        fetchApi()
},[])
    
  return (
    <div>
      {data?.map((items, index) => (
        <div key={index}>
          <h3>
            {items.name.first} {items.name.last}
          </h3>
          <p>{items.email}</p>
          <p>
            {items.location.city}, {items.location.country}
          </p>
          <img src={items.picture.large} alt="Profile Pic" />
          <p>{items.dob.age} years old</p>
        </div>
      ))}
    </div>
  );
}

export default FetchApi;
