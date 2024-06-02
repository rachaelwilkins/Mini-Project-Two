import { useState, useEffect } from "react";

function WorldClock()

const [timezone, setTimezone] = useState('');

useEffect(() => {
  fetch('https://worldtimeapi.org/api/timezone')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setTimezone(data);
    });
}, []);

return (
    <div className="Timezone componentBox">
        <label>Set currency:
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                {options}
            </select>
        </label>
        <p>Rate: {rate}</p>
    </div>
)

export default WorldClock