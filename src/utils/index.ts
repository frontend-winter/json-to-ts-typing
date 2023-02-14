import queryString from "query-string";

export const getURLParameters = <T>(search = ""): T =>
  queryString.parse(search) as unknown as T;

export const timeList = ["早上好", "上午好", "中午好", "下午好", "晚上好"];
export const currentTimeRange = () => {
  const now = new Date();
  const hours = now.getHours();
  let text = "";
  // 判断当前时间段
  if (hours >= 0 && hours < 9) {
    text = timeList[0];
  } else if (hours >= 9 && hours < 11) {
    text = timeList[1];
  } else if (hours >= 11 && hours < 13) {
    text = timeList[2];
  } else if (hours >= 13 && hours < 18) {
    text = timeList[3];
  } else if (hours >= 18 && hours < 24) {
    text = timeList[4];
  }
  return text;
};
