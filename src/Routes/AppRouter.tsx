
import { useRoutes } from "react-router-dom"
import OwnLayout from "../Layout/OwnLayout"
import Login from "../Pages/auth/Login/Login"
import { getStoredToken } from "../Services/user-storage"
import { Navigate } from "react-router-dom";
import Employers from "../Pages/employers/Employers"
import { LocalizationTypes } from '../Types';
import UploadFil from "../Pages/Upload/Upload"
import EmployerDetails from "../Components/Salary/EmployerDetails/EmployerDetails"
import NotFound from "../Components/Common/NotFound/NotFound"
import Register from "../Pages/auth/Register/Register"
import AddEmployee from "../Pages/AddEmployee/AddEmployee"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Faq from "../Pages/Faq/Faq";
const AppRouter = ({ t }: LocalizationTypes) => {
  const routes = useRoutes([
    {
      path: '*',
      element: <NotFound t={t} />,
    },
    {
      path: '/',
      element: getStoredToken() ? (
        <OwnLayout t={t} />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        {
          index: true,
          element: <Dashboard t={t} />,
        },
        {
          path: '/faq',
          element: <Faq t={t}/>,
        },
        {
          path: '/employers',
          element: <Employers t={t} />,
        },
        {
          path: '/employers/:id',
          element: <EmployerDetails t={t} />,
        },
        {
          path: '/contact',
          element: <div>contact</div>,
        },
        {
          path: '/upload',
          element: <UploadFil t={t} />,
        },
        {
          path: 'add-employee',
          element: <AddEmployee t={t} />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login t={t} />,
    },
    {
      path: '/register',
      element: <Register t={t} />,
    },
    {
      path: '/forget-password',
      element: <div>forget-password</div>,
    },
  ]);
  return routes;
};

export default AppRouter