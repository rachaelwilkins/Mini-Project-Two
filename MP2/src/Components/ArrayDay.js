const weekdays = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" }, 
    { id: 7, name: "Sunday" },
  ];
  
  export const findWeekdayById = (id) => {
    const findDay = weekdays.find(weekday => weekday.id === id);
    return(findDay.name);
  };