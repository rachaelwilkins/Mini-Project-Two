import { useState, useEffect } from "react";
import { PiSunFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function WorldClock() {

  const [data, setData] = useState("");
  const [searchCity, setSearchCity] = useState("");

  function getTime() {
    Axios.get(
      `https://worldtimeapi.org/api/timezone`
    ).then((response) => {
      setData(response.data[0]);
    });
  }
  
  return (
    <div className="App">
      <h1>World Clock</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search city here..."
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getTime();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      <div>
      <script>
      </script>
      </div>

     // 

      {data && (
        <div className="showResults">
        <h1>The time in {searchCity} is currently ${data[i].datetime}, ${data[i].day_of_week} June ${data[i].day_of_year}, 2024.</h1>   
        </div>
          
        // TO DO: Need to see if there is a way to display data as Saturday 2 June, 2024 for example. Figure out 'if' function for displaying sun and moon icon. 
  
      )}
    </div>
  );
}
 
export default WorldClock;