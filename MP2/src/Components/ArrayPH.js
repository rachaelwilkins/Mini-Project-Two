const weekday = [
    { id: 1, name: "monday" },
    { id: 2, name: "tuesday" },
    { id: 3, name: "wednesday" },
    { id: 4, name: "thursday" },
    { id: 5, name: "friday" },
    { id: 6, name: "saturday" }, 
    { id: 7, name: "sunday" },
  ];
  
  const findWeekdayById = id => {
    return weekday.find(weekday => weekday.id === id);
  };
  
  console.log(findWeekdayById(3)); // Object {id: 3, name: "wednesday"}