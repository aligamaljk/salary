import axiosInstance from "../Services/react-query/axiosInstance";
import { AddEmployeeType } from "../Types";



export const getAllEmployees = async () => {
  const { data } = await axiosInstance.get('/employees/all');
  return data;
};
export const getEmployee = async (id : string) => {
  const { data } = await axiosInstance.get(`/employees/${id}`);
  return data;
};


export const addEmployee = async (body: { employee : AddEmployeeType }) => {
  const { data } = await axiosInstance.post('/employees/new', body);
  return data;
};

export const deleteEmployee = async (id: string) => {
  const { data } = await axiosInstance.delete(`/employees/${id}`);
  return data;
}