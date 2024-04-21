import { Button, Checkbox, Input } from "antd"
import { LocalizationTypes } from "../../../Types";

const CalculationSystem = ({ t }: LocalizationTypes) => {
  return (
    <div className="calculation-system">
      <h1> {t.calculationTitle} </h1>
      {/* <Form name="calculation-system" layout="horizontal">
        <Form.Item
          name="calculation-system"
          // label="Calculation System"
          rules={[{ required: true, message: 'Please input your Calculation System!' }]}
        >
          <Button type="primary" danger size="small">
            Delete
          </Button>
          <Button type="text">Edit</Button>
          <Checkbox defaultChecked />
          <p>لما الموظف يتاخر اقل من</p>
          <p>ربع ساعه</p>
          <p>عن موعد حضوره اخصم</p>
          <Input type="number" placeholder="%0" />
          <p>من مرتبه اليومي % </p>
        </Form.Item>
      </Form> */}
      <div className="calculation-system-content">
        {[1, 2, 3].map((item) => (
          <div className="calculation-system-item" key={item}>
            <Button type="primary" danger size="small">
              {t.delete}
            </Button>
            <Button type="text">{t.edit}</Button>
            <Checkbox />
            <p>{t.calculationTitle1}</p>
            <p> {t.calculationTitle2} </p>
            <p> {t.calculationTitle3} </p>
            <Input type="number" placeholder="%0" />
            <p> {t.calculationTitle4} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculationSystem