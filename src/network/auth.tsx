import { axiosInstance } from '../Services/react-query/axiosInstance';
import { authLogIn } from '../Types';
export const AuthRegister = async (body : authLogIn) => {
  console.log(body, 'body');
  const { data } = await axiosInstance.post('/admin/register', body);
  return data;
}
export const AuthLogin = async (body: authLogIn)=> {
  console.log(body, 'body');
  const { data } = await axiosInstance.post('/admin/login', body);
  return data;
};