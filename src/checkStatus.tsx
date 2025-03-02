import { compare_date, compare_time } from "./compare_date";

export function checkStatus(entrance_date, entrance_time, flag) {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString().slice(0, -3);

  let date_c = compare_date(entrance_date, dateString), time_c = compare_time(entrance_time, timeString);
  if(flag) return 3;
  else if(date_c === 1 || (date_c === 0 && time_c === 1)) return 2;
  else if(date_c === -1 || (date_c === 0 && time_c === -1)) return 1;
  else return 1;
}