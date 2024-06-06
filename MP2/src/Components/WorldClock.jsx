import { useState, useEffect } from "react";
import { PiSunFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import '../App.css';
import { findWeekdayById } from "./ArrayPH";

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
  const slash = data?data.timezone.indexOf("/"):null

  return (
    <div className="worldClock">
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

      {data && (
        <div className="showResults">
        <h1>Right now, the time in {data?.timezone.substring(slash+1)} is {data.datetime.substring(11,16)}, {findWeekdayById(data.day_of_week).name} June {data.datetime.substring(6,7)}, 2024.</h1>   
        </div>
          
      )}
    </div>
  );
}
 
export default WorldClock;