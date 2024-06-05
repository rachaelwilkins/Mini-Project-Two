import { useState, useEffect } from "react";
import { PiSunFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function WorldClock() {
  let OK=false
  const [data, setData] = useState("");
  const [searchCity, setSearchCity] = useState("");

  useEffect(()=>{
    axios.get(
      `http://worldtimeapi.org/api/ip`
    ).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  },[searchCity]) 
  
  return (
    <div>
      <h1>World Clock</h1>
      {/* <div className="searchBox"> */}
        <input
          type="text"
          placeholder="Search city here..."
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        />
      {OK?"OK":"Not OK"}
      {/* </div> */}

     // 

      {/* {data && (
        <div className="showResults">
        <h1>The time in {searchCity} is currently ${data[i].datetime}, ${data[i].day_of_week} June ${data[i].day_of_year}, 2024.</h1>   
        </div>
          
        // TO DO: Need to see if there is a way to display data as Saturday 2 June, 2024 for example. Figure out 'if' function for displaying sun and moon icon. 
  
      )} */}
    </div>
  );
}
 
export default WorldClock;