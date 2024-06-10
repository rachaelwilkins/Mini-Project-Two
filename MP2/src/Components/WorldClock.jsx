import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import '../App.css';
import { findWeekdayById } from "./ArrayDay";
import { findMonthById } from "./ArrayMonth";
import DropDown from "./DropDown";

function WorldClock() {
  let OK=false
  const [data, setData] = useState("");
  const [timezoneList, setTimezoneList] = useState(null);

  const [chosenCity, setChosenCity] = useState(null);

  useEffect(()=>{

    console.log(chosenCity)

    timezoneList?null:axios.get(

      `http://worldtimeapi.org/api/timezone/`

    ).then((response) => {

      console.log(response.data);

      setTimezoneList(response.data);

    })

    chosenCity

    ?axios.get(

      `http://worldtimeapi.org/api/${chosenCity}`

    ).then((response) => {

      console.log(response.data);

      setData(response.data);

    })

    :axios.get(

      `http://worldtimeapi.org/api/ip`

    ).then((response) => {

      console.log(response.data);

      setData(response.data);

    });

  },[timezoneList, chosenCity])

  const slash = data?data.timezone.indexOf("/"):null

  return (
    <div className="worldClock">
      <h1>World Clock</h1>
      {timezoneList?<DropDown options={timezoneList} setOption={setChosenCity}/>:null}
      {data && (
        <div className="showResults">
        <h1>Right now, the time in {data?.timezone.substring(slash+1)} is {data.datetime.substring(11,16)}, {findWeekdayById(data.day_of_week)} 
           {findMonthById(data.datetime.substring(5,7))} 
           {data.datetime.substring(8,10)}
          , 2024.</h1>   
        </div>
          
      )}
    </div>
  );
}
 
export default WorldClock;