import { Button, Col, DatePicker, Form, Input, Select } from "antd"
import { AddEmployeeType, LocalizationTypes } from "../../Types";
import dayjs from "dayjs";

const InfoEmployer = ({
  t,
  employee,
}: { t: LocalizationTypes["t"]; employee: AddEmployeeType }) => {
  console.log(employee, "employee");
  const {
    birthDate,
    gender,
    job,
    joinedDate,
    workingStatus,
    salary,
  } = employee;
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };
  return (
    <>
      <div className="content">
        <Form
          layout="vertical"
          name="info-employer"
          className="info-employer"
          onFinish={onFinish}
          initialValues={{
            // name: name,
            job: job,
            age: 20,
            date: dayjs(birthDate),
            // married: isMarried,
            // education: education,
            salary: salary?.baseSalary,
            dateJoin: dayjs(joinedDate),
            study: workingStatus,
            gender: gender,
          }}
        >
          <Col className="info-employer-col">
            <Col span={12}>
              <Form.Item
                name="serial-number"
                label={t.serialNumber}
                initialValue="01"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Serial Number!',
                  },
                ]}
              >
                <Input type="number" disabled />
              </Form.Item>
              <Form.Item
                name="job"
                label={t.job}
                rules={[{ required: true, message: 'Please input your Job!' }]}
              >
                <Input type="text" placeholder={t.job} />
              </Form.Item>
              <Form.Item
                name="age"
                label={t.age}
                rules={[{ required: true, message: 'Please input your Age!' }]}
              >
                <Input type="number" placeholder={t.age} />
              </Form.Item>
              <Form.Item
                name="date"
                label={t.dateBirth}
                rules={[{ required: true, message: 'Please input your Date!' }]}
                // initialValue={dayjs(birthDate)}
              >
                <DatePicker  placeholder={t.dateBirth} />
              </Form.Item>
              <Form.Item
                name="dateJoin"
                label={t.dateJoin}
                rules={[
                  {
                    required: true,
                    message: 'Please input your Date of joining the company!',
                  },
                ]}
              >
                <DatePicker placeholder={t.dateJoin} />
              </Form.Item>
              <Form.Item
                name="study"
                label={t.study}
                rules={[
                  { required: true, message: 'Please input your Study!' },
                ]}
              >
                <Select placeholder={t.study}>
                  <Select.Option value="student"> {t.study1} </Select.Option>
                  <Select.Option value="graduate"> {t.study2} </Select.Option>
                  <Select.Option value="trainee"> trainee </Select.Option>
                  <Select.Option value="fullTime"> {t.study3} </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label={t.gender}
                rules={[
                  { required: true, message: 'Please input your Gender!' },
                ]}
              >
                <Select placeholder={t.gender}>
                  <Select.Option value="male"> {t.male} </Select.Option>
                  <Select.Option value="female"> {t.female} </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="marital"
                label={t.maritalStatus}
                rules={[
                  {
                    required: true,
                    message: 'Please input your Marital Status!',
                  },
                ]}
              >
                <Select placeholder={t.maritalStatus}>
                  <Select.Option value="single">
                    {t.maritalStatus1}
                  </Select.Option>
                  <Select.Option value="married">
                    {' '}
                    {t.maritalStatus2}{' '}
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="last"
                label={t.lastCaptured}
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last Captured!',
                  },
                ]}
              >
                <DatePicker  placeholder={t.lastCaptured} />
              </Form.Item>
              <Form.Item
                name="status"
                label={t.status}
                rules={[
                  { required: true, message: 'Please input your Status!' },
                ]}
              >
                <Select placeholder={t.status}>
                  <Select.Option value="active"> {t.status1} </Select.Option>
                  <Select.Option value="trainee"> {t.status2} </Select.Option>
                  <Select.Option value="dismiss"> {t.status3} </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="dateExit"
                label={t.dataEit}
                rules={[
                  {
                    required: true,
                    message: 'Please input your Date of exit from the company!',
                  },
                ]}
              >
                <DatePicker  placeholder={t.dataEit} />
              </Form.Item>
              <Form.Item
                name="lastSalary"
                label={t.dataLast}
                rules={[
                  {
                    required: true,
                    message:
                      'Please input your Date of the last time his salary was raised!',
                  },
                ]}
              >
                <DatePicker  placeholder={t.dataLast} />
              </Form.Item>
            </Col>
          </Col>
          <Form.Item
            name="salary"
            label={t.salary}
            className="salary"
            rules={[{ required: true, message: 'Please input your Salary!' }]}
          >
            <Input type="number" placeholder={t.salary} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t.add}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default InfoEmployer