import { Menu } from 'antd';
// import './SidebarMenu.scss';
import { IoMdHeartEmpty, IoIosPersonAdd } from 'react-icons/io';
import { PiUsersThreeFill } from 'react-icons/pi';
import { FaFileUpload } from 'react-icons/fa';
import { GrDashboard } from 'react-icons/gr';
import {  useNavigate } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import { GetItemProps } from '../Types';

type PropsType = {
  dashboard: string;
  about: string;
  employees: string;
  uploadFile: string;
  addEmployee: string;
};
const SidebarMenu = ({
  dashboard,
  about,
  employees,
  uploadFile,
  addEmployee,
}: PropsType) => {
  const navigate = useNavigate();
  const getItem = (
    key: string,
    label: string,
    children: GetItemProps[] | null,
    icon: JSX.Element
  ) => ({
    key,
    label,
    children,
    icon,
  });
  const items = [
    getItem('', dashboard, null, <GrDashboard className="navbar-icon" />),
    getItem('about', about, null, <IoMdHeartEmpty className="navbar-icon" />),
    getItem(
      'employers',
      employees,
      null,
      <PiUsersThreeFill className="navbar-icon" />
    ),
    getItem(
      'upload',
      uploadFile,
      null,
      <FaFileUpload className="navbar-icon" />
    ),
    getItem(
      'add-employee',
      addEmployee,
      null,
      <IoIosPersonAdd className="navbar-icon" />
    ),
  ];
  return (
    <div className="sidebar-menu">
      <div
        onClick={() => {
          navigate('/');
        }}
        className="logo"
      >
        Salary
      </div>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={[
          window.location.pathname === '/'
            ? ''
            : window.location.pathname.split('/')[1],
        ]}
        defaultOpenKeys={['sub2']}
        onClick={({ key }) => {
          console.log('getItem  key:', key);
          navigate('/' + key);
        }}
      />
    </div>
  );
};

export default SidebarMenu;
