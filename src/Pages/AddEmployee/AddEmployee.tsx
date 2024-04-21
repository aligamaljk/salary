import { Button, Col, DatePicker, Form, Input, message, Select } from "antd"
import { AddEmployeeType, ErrorMessage, LocalizationTypes } from '../../Types';
import "./AddEmployee.scss"
import { addEmployee } from "../../network/employee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { queryKeys } from "../../Services/react-query/queryKeys";
const AddEmployee = ({t} : LocalizationTypes ) => {
    const [form] = Form.useForm();
      const client = useQueryClient();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const { mutate: AddEmployee } = useMutation({
      mutationKey: ['addEmployee'],
      mutationFn: (body: { employee: AddEmployeeType }) => addEmployee(body),
      onSuccess: (data) => {
        setLoading(true);
        console.log(data, 'data');
        if (!data) {
          setLoading(false);
          return message.error('Something went wrong');
        }
        message.success('Employee added successfully');
        client.invalidateQueries({ queryKey: [queryKeys.employees] });
        navigate('/employers');
        setLoading(false);
      },
      onError: (error: ErrorMessage) => {
        console.log(error?.response?.data, 'error');
        message.error(error?.response?.data?.message);
        setLoading(false);
      },
    });
    const onFinish = (values: AddEmployeeType) => {
      console.log('Success:', values);
      setLoading(true);
      AddEmployee({
        employee: {
          name: values.name,
          workingStatus: values.workingStatus,
          job: values.job,
          birthDate: values.birthDate,
          isMarried: false,
          gender: values.gender,
          salary: {
            baseSalary: values.baseSalary,
            debt: 0,
          },
          joinedDate: values.joinedDate,
          education: values.education,
        },
      });
    };
  return (
    <>
      <div className="add-employee">
        <h1 className="title-add">{t.addEmployee}</h1>
        <Form
          name="add-employee"
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className="form-add-employee"
        >
          <Col>
            <Form.Item
              name="name"
              label={t.name}
              rules={[
                { required: true, message: t.requiredName },
                { min: 6, message: t.requiredNameMin },
              ]}
            >
              <Input type="text" placeholder={t.name} />
            </Form.Item>
            <Form.Item
              name="job"
              label={t.job}
              rules={[{ required: true, message: t.requireJob }]}
            >
              <Input type="text" placeholder={t.job} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="workingStatus"
              label={t.workingStatus}
              rules={[{ required: true, message: t.requireWorkingStatus }]}
            >
              <Select placeholder={t.workingStatus}>
                <Select.Option value="trainee">{t.trainee}</Select.Option>
                <Select.Option value="employee">{t.employee}</Select.Option>
                <Select.Option value="graduate">{t.graduate}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="gender"
              label={t.gender}
              rules={[{ required: true, message: t.requireGender }]}
            >
              <Select placeholder={t.gender}>
                <Select.Option value="male">{t.male}</Select.Option>
                <Select.Option value="female">{t.female}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="birthDate" label={t.birthDate}
              rules={[{ required: true, message: t.requiredBirthDate }]}
            >
              <DatePicker placeholder={t.birthDate} />
            </Form.Item>
            <Form.Item name="joinedDate" label={t.joinedDate}
              rules={[{ required: true, message: t.requiredJoinedDate }]}
            >
              <DatePicker placeholder={t.joinedDate} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="baseSalary" label={t.basicSalary}
              rules={[{ required: true, message: t.requiredBasicSalary }]}
            >
              <Input type="number" placeholder={t.basicSalary} />
            </Form.Item>
            <Form.Item name="education" label={t.education}>
              <Select placeholder={t.education}>
                <Select.Option value="graduate"> {t.graduate} </Select.Option>
                <Select.Option value="other"> {t.others} </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              block
              size="large"
              className="btn-add-employee"
              loading={loading}
            >
              {t.addEmployee}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default AddEmployee