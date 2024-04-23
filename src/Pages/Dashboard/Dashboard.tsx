import {Card, Progress, Statistic, Table, Tooltip, Tour, TourProps, Typography } from "antd";
import { LocalizationTypes } from "../../Types";
import "./Dashboard.scss";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
const Dashboard = ({ t }: LocalizationTypes) => {
   const ref1 = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const [open, setOpen] = useState<boolean>(false);
   const steps: TourProps['steps'] = [
     {
       title: 'Upload File',
       description: 'Put your files here.',
       cover: (
         <img
           alt="tour.png"
           src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
         />
       ),
       target: () => ref1.current,
     },
     {
       title: 'Save',
       description: 'Save your changes.',
       target: () => ref2.current,
     },
     {
       title: 'Other Actions',
       description: 'Click to see other actions.',
       target: () => ref3.current,
     },
   ];
   const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
      render: (text: string) => <a>{text}</a>,
    },
     {
       title: 'Name',
       dataIndex: 'name',
       key: 'name',
     },
     {
       title: 'Phone',
       dataIndex: 'phone',
       key: 'phone',
     },
     {
       title: 'Job',
       dataIndex: 'job',
       key: 'job',
     },
     {
       title: 'Gender',
       dataIndex: 'gender',
       key: 'gender',
     },
     {
       title: 'Marital Status',
       dataIndex: 'maritalStatus',
       key: 'maritalStatus',
     },
     {
       title: 'Salary',
       dataIndex: 'salary',
       key: 'salary',
     },
   ];
   const data = [
     {
       key: '1',
       name: 'Ahmed',
       phone: 1234567890,
       job: 'Backend Developer',
       gender: 'Male',
       maritalStatus: 'Single',
       salary: 1000,
       number: 1,
     },
     {
       key: '2',
       name: 'Mohamed',
       phone: 1234567890,
       job: 'ui/ux Designer',
       gender: 'Male',
       maritalStatus: 'Single',
       salary: 1200,
       number: 2,
     },
     {
       key: '3',
       name: 'Ali',
       phone: 1234567890,
       job: 'frontend Developer',
       gender: 'Male',
       maritalStatus: 'Single',
       salary: 5000,
       number: 3,
     },
     {
       key: '4',
       name: 'Omar',
       phone: 1234567890,
       job: 'devops Engineer',
       gender: 'Male',
       maritalStatus: 'Single',
       salary: 3000,
       number: 4,
     },
     {
       key: '5',
       name: 'Sayed',
       phone: 1234567890,
       job: 'backend Developer',
       gender: 'Male',
       maritalStatus: 'Single',
       salary: 1200,
       number: 5,
     },
   ];
  return (
    <>
      <div className="dashboard">
        <h1 className="title-dashboard">{t.dashboard}</h1>
        <div className="cards">
          <Card
            className="card"
            bordered={false}
            ref={ref1}
            onClick={() => setOpen(true)}
          >
            <div className="total-employees">
              <p>{t.employees}:</p>
              <p>100 counter </p>
            </div>
          </Card>
          <Card bordered={false} ref={ref2}>
            <Statistic
              title="النسبة المئوية الخاصة بالموظفين الذين لا يتاخرون"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
          <Card bordered={false} ref={ref3}>
            <Statistic
              title="النسبة المئوية الخاصة بالموظفين الذين يتاخرون"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        <div className="progress">
          <Card bordered={false}>
            <Tooltip
              title="In Progress 60% Completed 30% "
              className="tooltip-dashboard"
            >
              <Progress
                trailColor="#d9d9d9"
                percent={60 + Math.floor(Math.random() * (100 - 60 + 1))}
                success={{ percent: 30 }}
                status="active"
                strokeColor="#1890ff"
                strokeWidth={10}
                showInfo
                strokeLinecap="square"
                // type="circle"
                type="dashboard"
              />
            </Tooltip>
          </Card>
          <Card bordered={false}>
            <Tooltip
              title="In Progress 60% Completed 30% "
              className="tooltip-dashboard"
            >
              <Progress
                trailColor="#d9d9d9"
                percent={60 + Math.floor(Math.random() * (100 - 60 + 1))}
                success={{ percent: 30 }}
                status="active"
                strokeColor="#1890ff"
                strokeWidth={10}
                showInfo
                strokeLinecap="square"
                // type="circle"
                type="dashboard"
              />
            </Tooltip>
          </Card>
          <Card bordered={false}>
            <Tooltip
              title="In Progress 60% Completed 30% "
              className="tooltip-dashboard"
            >
              <Progress
                trailColor="#d9d9d9"
                percent={60 + Math.floor(Math.random() * (100 - 60 + 1))}
                success={{ percent: 30 }}
                status="active"
                strokeColor="#1890ff"
                strokeWidth={10}
                showInfo
                strokeLinecap="square"
                // type="circle"
                type="dashboard"
              />
            </Tooltip>
          </Card>
        </div>
        <Card bordered={false} className="table-dashboard">
          <div>
            {/* <h3 className="title-table-dashboard">Top five employees</h3> */}
            <Typography.Title className="title-table-dashboard">Top five employees</Typography.Title>
            <Table
              className="table-dashboard"
              dataSource={data}
              columns={columns}
              pagination={false}
              scroll={{ x: 'max-content' }}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;