import { Button, Input, message, Table } from "antd"
import "./Employers.scss"
import { useRef, useState } from "react";
import { TableProps } from "antd/es/table";
import { useNavigate } from "react-router";
import { DataType, LocalizationTypes } from '../../Types';
import ReactToPrint from 'react-to-print';
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../Services/react-query/queryKeys";
import dayjs from "dayjs";
import { clearStoredToken, clearStoredUser } from "../../Services/user-storage";
import { Key } from "antd/es/table/interface";
import { getAllEmployees } from "../../network/employee";
const Employers = ({ t }: LocalizationTypes) => {
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState('');
  const columns: TableProps<DataType>['columns'] = [
    {
      title: "number",
      dataIndex: "index",
      key: "index",
      // render: ( index: number) => <span>{index + 1}</span>,
    },
    {
      title: t.name,
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value: boolean | string | Key , record: DataType) => {
        const name = String(record.name).toLowerCase();
        const searchValue = value as string;
        return name.includes(searchValue);
      },
      render: (text: string) => (
        <a
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
      render: (text: string) => (
        <span
          style={{
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'job',
      dataIndex: 'job',
      key: 'job',
      render: (text: string) => (
        <span
          style={{
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Birth Date',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: (text: string) => (
        <span
          style={{
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'joined Date',
      dataIndex: 'joinedDate',
      key: 'joinedDate',
      render: (text: string) => (
        <span
          style={{
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          {text}
        </span>
      ),
    },
  ];
  const { data, isLoading, isError, error,isFetching } = useQuery({
    queryKey: [queryKeys.employees],
    queryFn: () => getAllEmployees(),
    // refetchOnWindowFocus: false,
    // keepPreviousData: true,
    // staleTime: 1000 * 60 * 5,
  });
  console.log(isFetching, 'isFetching');
const dataCustomers: DataType[] =
  data &&
  data.data &&
  data.data.employees.map(
    (
      employee: {
        _id: number;
        name: string;
        job: string;
        date: string;
        joinedDate: string;
        gender: string;
      },
      index: number
    ) => ({
      index: index + 1,
      key: employee._id,
      id: employee._id,
      name: employee.name,
      job: employee.job,
      birthDate: dayjs(employee.date).format('YYYY-MM-DD'),
      joinedDate: dayjs(employee.joinedDate).format('YYYY-MM-DD'),
      gender: employee.gender,
    })
  );

if (isError && error instanceof Error) {
  const errorData : { response?: { data?: { message?: string } }} = error as { response?: { data?: { message?: string } } };
    if (
      errorData?.response?.data?.message === 'Access Denied: Please login first'
    ) {
      navigate('/login');
      clearStoredToken();
      clearStoredUser();
      message.error(t.loginFirst);
    } else {
      console.log(errorData.response?.data?.message || error.message);
    }
}
  return (
    <>
      <div className="employers">
        <h1>{t.employees}</h1>
        <div className="table">
          <Input.Search
            placeholder={t.searchName}
            className="request-search"
            onSearch={(value) => {
              setSearchText(value);
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div ref={componentRef}>
            <Table
              columns={columns}
              dataSource={dataCustomers}
              className="table-customers"
              loading={isLoading || isFetching}
              pagination={{
                current: 1,
                total: 2,
                pageSize: 10,
                responsive: true,
                showSizeChanger: false,
              }}
              scroll={{ x: 'max-content' }}
              onRow={(record) => {
                console.log(record);
                return {
                  onClick: () => {
                    navigate(`/employers/${record.id}`);
                    console.log(record);
                  },
                };
              }}
            />
          </div>
        </div>
        <ReactToPrint
          trigger={() => {
            return <Button type="primary">Print this out!</Button>;
          }}
          content={() => componentRef.current}
          documentTitle="Customers"
          pageStyle="print"
        />
      </div>
    </>
  );
};

export default Employers