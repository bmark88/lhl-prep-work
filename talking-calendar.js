let talkingCalendar = function(date) {
  let yearMonthDay;
  let year, month, day, daySubScript;
  
  yearMonthDay = date.split('/');
  day = yearMonthDay[2];
  year = yearMonthDay[0];

  // Setting up day subscript
  if (day.slice(-1) === '1') {
    daySubScript = 'st';
  } else if (day.slice(-1) === '2') {
    daySubScript = 'nd';
  } else if (day.slice(-1) === '3') {
    daySubScript = 'rd';
  } else {
    daySubScript = 'th';
  }

  if (day[0] === '0') {
    day = day[1];
  }

  // Converting numeric month value to actual month
  switch (yearMonthDay[1]) {
  case '01': month = "January";
    break;
  case '02': month = "February";
    break;
  case '03': month = "March";
    break;
  case '04': month = "April";
    break;
  case '05': month = "May";
    break;
  case '06': month = "June";
    break;
  case '07': month = "July";
    break;
  case '08': month = "August";
    break;
  case '09': month = "September";
    break;
  case '10': month = "October";
    break;
  case '11': month = "November";
    break;
  case '12': month = "December";
    break;
  }
  
  return month + ' ' + day + daySubScript + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
