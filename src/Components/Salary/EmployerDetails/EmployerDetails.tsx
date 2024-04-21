import { Button, message, Popconfirm } from "antd"
import { useNavigate, useParams } from "react-router"
import "./EmployerDetails.scss"
import InfoEmployer from "../InfoEmployer"
import CalculationSystem from "./CalculationSystem"
import { ErrorMessage, LocalizationTypes } from "../../../Types"
import TableSalary from "./TableSalary"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteEmployee, getEmployee } from "../../../network/employee"
import { queryKeys } from "../../../Services/react-query/queryKeys"
import { useState } from "react"
import { clearStoredToken, clearStoredUser } from "../../../Services/user-storage"
const EmployerDetails = ({ t }: LocalizationTypes) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.employees, id],
    queryFn: () => getEmployee(id as string),
  });
   const handleRemove = useMutation({
     mutationFn: () => {
       return deleteEmployee(id as string);
     },
     onSuccess: () => {
       setLoading(false);
       message.success(t.successDelete);
       navigate('/employers');
     },
     onError: (error: ErrorMessage) => {
       console.log(error?.response?.data, 'error');
       message.error(error?.response?.data?.message);
     },
   });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(data, "data");
const { employee } = data.data || {};
const {name} = employee || {};
console.log(name, 'name');
if (handleRemove.isError && handleRemove.error instanceof Error) {
  const errorData: { response?: { data?: { message?: string } } } =
    handleRemove.error as {
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
    console.log(errorData.response?.data?.message || handleRemove.error);
  }
}
  return (
    <>
      <div className="employer-details">
        <div className="header-details">
          <h2 className="title-header">
            {t.employeePage} :<span> {name}</span>
          </h2>
          <Popconfirm
            title={t.deleteMes}
            description={t.deletedesc}
            onConfirm={() => {
              setLoading(true);
              handleRemove.mutate();
            }}
            onCancel={() => {
              setLoading(false);
              message.info(t.canceled);
            }}
            okText={t.okText}
            cancelText={t.cancelText}
          >
            <Button type="text" size="large" danger loading={loading}>
              {t.deleteEmployee}
            </Button>
          </Popconfirm>
        </div>
        <div className="info-employer-main">
          <InfoEmployer t={t} employee={employee} />
        </div>
        <div className="calculation-system-employer">
          <CalculationSystem t={t} />
        </div>
        <div className="salary-table">
          <TableSalary t={t} />
        </div>
      </div>
    </>
  );
};

export default EmployerDetails