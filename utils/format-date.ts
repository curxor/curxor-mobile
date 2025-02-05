import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const formatDate = (date: string) => {
  const timeZone = "Asia/Ho_Chi_Minh";
  const newDate = new Date(date);
  const zonedDate = toZonedTime(newDate, timeZone);
  const formattedDate = format(zonedDate, "yyyy-MM-dd HH:mm:ss");
  return formattedDate;
};
