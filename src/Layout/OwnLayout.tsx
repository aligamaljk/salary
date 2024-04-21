import { Dropdown, Button,Layout, Space, Badge, Avatar } from "antd";
import { MdLanguage } from 'react-icons/md';
const { Header, Sider, Content } = Layout;
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { Outlet, useNavigate } from "react-router";
import { useAppDispatch } from "../Store/hooks";
import { setCurrentLang } from "../Store/reducers/user";
import "./Layout.scss"
import { clearStoredToken, clearStoredUser, getStoredToken, getStoredUser, setLang } from "../Services/user-storage";
import { LocalizationTypes } from '../Types';
import axiosInstance from "../Services/react-query/axiosInstance";
const OwnLayout = ({ t }: LocalizationTypes) => {
  const { dashboard , about, employees, uploadFile, addEmployee} = t;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [token, setToken] = useState<string | null>();
  // console.log(token, 'token');
  
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      label: t.logout,
      danger: true,
      key: '1',
    },
  ];
  const itemsLang = [
    {
      key: 'en',
      label: 'English',
    },
    {
      key: 'ar',
      label: 'العربية',
    },
  ];
  const chanageLang = ({ key }: { key: string }) => {
    //  console.log(key);
    dispatch(setCurrentLang(key));
    setLang(key);
    document.getElementsByTagName('html')[0].setAttribute('lang', key);
  };
  useEffect(() => {
    setToken(getStoredToken());
    if(token){
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    } else {
      // navigate('/login');
      console.log('no token');
      
    }
  }, [navigate, token]);
  return (
    <>
      <div className="main-layout">
        <Layout>
          <Sider
            width={282}
            theme="light"
            breakpoint="lg"
            collapsed={collapsed}
            collapsible
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(value) => setCollapsed(value)}
            className="sider-layout"
          >
            {/* <SidebarMenu dashboard={dashboard} about={about} employees={employees} uploadFile={uploadFile} addEmployee={addEmployee}  /> */}
            <SidebarMenu
              dashboard={dashboard ?? 'Default Dashboard'}
              about={about ?? 'About'}
              employees={employees ?? 'Employees'}
              uploadFile={uploadFile ?? 'Upload File'}
              addEmployee={addEmployee ?? 'Add Employee'}
            />
          </Sider>
          <Layout className="site-layout">
            <Header className="header">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
              >
                <Dropdown
                  menu={{
                    items,
                    onClick: (e) => {
                      console.log(e);
                      if (e?.key === '1') {
                        console.log('logout');
                        clearStoredToken();
                        clearStoredUser();
                        navigate('/login');
                      }
                    },
                  }}
                  trigger={['click']}
                  placement="bottom"
                >
                  <Space
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Badge
                      dot={true}
                      color="#1890ff"
                      count={1}
                      className="header-badge"
                    >
                      <Avatar
                        size={35}
                        style={{
                          backgroundColor: 'rgb(24, 144, 255)',
                          fontSize: 20,
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        {getStoredUser()?.charAt(0)}
                      </Avatar>
                    </Badge>
                  </Space>
                </Dropdown>
                <Dropdown
                  arrow={{ pointAtCenter: true }}
                  trigger={['click']}
                  menu={{ items: itemsLang, onClick: chanageLang }}
                  placement="bottom"
                >
                  <Button
                    type="text"
                    size="small"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      fontWeight: 'bold',
                    }}
                  >
                    Language
                    <MdLanguage />
                  </Button>
                </Dropdown>
              </div>
            </Header>
            <Content className="content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default OwnLayout