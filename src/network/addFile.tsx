// /attendanceTimes/new

import { axiosInstance } from "../Services/react-query/axiosInstance";
import {  AttendanceTime } from "../Types";

export const AddFile = async (body: { attendanceTime: AttendanceTime[]}) => {
  console.log(body, 'body');
  const { data } = await axiosInstance.post('/attendanceTimes/new', body);
  return data;
};

