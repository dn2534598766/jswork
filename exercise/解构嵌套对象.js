const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // 在这行以下修改代码
    const {tomorrow:{min,max:maxOfTomorrow}} =forecast; // 改变这一行
    // 在这行以上修改代码
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST));