import { Button, Form, message, Table, TableProps, Upload, UploadProps } from 'antd';
import {  useRef, useState } from 'react';
import { UploadFile } from 'antd/lib/upload/interface'; 
import * as XLSX from 'xlsx';
import "./Upload.scss"
import ReactToPrint from 'react-to-print';
import { AddFile } from '../../network/addFile';
import { useMutation } from '@tanstack/react-query';
import { AttendanceTime, ErrorMessage, LocalizationTypes } from '../../Types';
import { clearStoredToken, clearStoredUser } from '../../Services/user-storage';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../Store/hooks';
// console.log(getStoredToken(), 'token');
const UploadFil = ({ t }: LocalizationTypes) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { currentDarkMode } = useAppSelector((state) => state.user)
  const [fileList, setFileList] = useState<UploadFile<unknown>[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<unknown[]>([]);
  // console.log(data, 'data');
    const componentRef = useRef<HTMLDivElement | null>(null);
  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    
    fileList: fileList,
    onChange(info) {
      setFileList(info.fileList);
    },
  };

  const onFinish = (value : { file: { fileList: UploadFile<unknown>[] }}  ) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      if (event && event.target) {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
         workbook.SheetNames.forEach((sheet) => {
           const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          //  setData(Array.from(rows));
          setData(rows);
         }
        );
        }
      }
      fileReader.readAsBinaryString(
        value?.file?.fileList[0]?.originFileObj as unknown as Blob
      );
  };
  function removeSpacesFromKeysInArray(
    arr: Record<string, unknown>[]
  ): Record<string, unknown>[] {
    return arr.map((obj) => {
      const newObj: Record<string, unknown> = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const newKey = key.replace(/\s/g, '');
          newObj[newKey]  = obj[key];
        }
      }
      return newObj;
    });
  }

  const newArr = removeSpacesFromKeysInArray(data as unknown as Record<string, unknown>[]);
  // console.log(newArr);
  const columns: TableProps['columns'] = [
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'ClockIn',
      dataIndex: 'ClockIn',
      key: 'ClockIn',
    },
    {
      title: 'ClockOut',
      dataIndex: 'ClockOut',
      key: 'ClockOut',
    },
    {
      title: 'Onduty',
      dataIndex: 'Onduty',
      key: 'Onduty',
    },
    {
      title: 'Offduty',
      dataIndex: 'Offduty',
      key: 'Offduty',
    },
  ];
  const data2 = newArr.map((item ) => {
      return {
        key: item.Date,
        Date: item.Date,
        Name: item.Name,
        ClockIn: item.ClockIn ? item.ClockIn : 'غياب',
        ClockOut: item.ClockOut ? item.ClockOut : 'غياب',
        Onduty: item.Onduty,
        Offduty: item.Offduty,
      };
    })
    const { mutate: AddFileExl, isError, error } = useMutation({
      mutationFn: (body: { attendanceTime: AttendanceTime[]}) => AddFile(body),
      onSuccess: (data) => {
        setLoading(true);
        console.log(data, 'data');
        if (!data) {
          setLoading(false);
          return message.error('Something went wrong');
        }
        setLoading(false);
      },
      onError: (error: ErrorMessage) => {
        console.log(error?.response?.data, 'error');
        message.error(error?.response?.data?.message);
        setLoading(false);
      },
    });
    const onFinishFailed = () => {
      // attendanceTime;
      setLoading(true);
      // AddFileExl( { attendanceTime: data });
      const attendanceTime: AttendanceTime[] = data as AttendanceTime[];
      AddFileExl({ attendanceTime });
    }
    if (isError && error instanceof Error) {
      const errorData: { response?: { data?: { message?: string } } } = error as {
        response?: { data?: { message?: string } };
      };
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
      <div className="upload">
        {newArr.length === 0 ? (
          <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            className="form-upload"
            form={form}
          >
            <Form.Item
              name="file"
              label="File"
              rules={[{ required: true, message: 'Please select a file!' }]}
              className={currentDarkMode ? 'form-upload-dark' : 'upload-file'}
            >
              <Upload {...props}>
                <span>Upload File xls</span>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={currentDarkMode ? 'btn-dark' : ''}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div
            style={{ width: '100%', position: 'relative' }}
            ref={componentRef}
          >
            <Table
              columns={columns}
              dataSource={data2}
              pagination={false}
              scroll={{ x: 'max-content' }}
            />
            <div className="salary">
              <div className="total-time">
                <span>Total Time:</span>
                <span>210 hours</span>
              </div>
              <div className="total-salary">
                <span>
                  Total Salary: <span>3000 EGP</span>
                </span>
              </div>
            </div>
            <div
              style={{
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Button type="primary" onClick={onFinishFailed} loading={loading}>
                Save File
              </Button>
              <ReactToPrint
                trigger={() => {
                  return <Button type="primary">Print this out!</Button>;
                }}
                content={() => componentRef.current}
                documentTitle="Customers"
                pageStyle="print"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadFil;
