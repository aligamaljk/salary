import { Table, TableProps } from "antd"
import { DataSalaryTable, DataSalaryTable2, LocalizationTypes } from "../../../Types";

const TableSalary = ({ t } : LocalizationTypes ) => {
    const columns: TableProps['columns'] = [
      {
        title: t.history,
        dataIndex: 'history',
        key: 'history',
      },
      {
        title: t.entrance,
        dataIndex: 'entrance',
        key: 'entrance',
      },
      {
        title: t.exit,
        dataIndex: 'exit',
        key: 'exit',
      },
      {
        title: t.datesAttendance,
        dataIndex: 'datesAttendance',
        key: 'datesAttendance',
      },
      {
        title: t.datesExit,
        dataIndex: 'datesExit',
        key: 'datesExit',
      },
      {
        title: t.delays,
        dataIndex: 'delays',
        key: 'delays',
      },
      {
        title: t.additional,
        dataIndex: 'additional',
        key: 'additional',
      },
      {
        title: t.absences,
        dataIndex: 'absences',
        key: 'absences',
      },
      {
        title: t.comments,
        dataIndex: 'comments',
        key: 'comments',
      },
    ];

    const data: DataSalaryTable[] = [
      {
        key: '1',
        history: '2022-01-01',
        entrance: '10.5 ' + t.am,
        exit: '1' + t.pm,
        datesAttendance: '10 ' + t.am,
        datesExit: '12 ' + t.pm,
        delays: '30 minutes',
        additional: '60 minutes',
        absences: t.notFound,
        comments: t.notFound,
      },
      {
        key: '2',
        history: '2022-01-02',
        entrance: '10 ' + t.am,
        exit: '12' + t.pm,
        datesAttendance: '10 ' + t.am,
        datesExit: '12 ' + t.pm,
        delays: t.notFound,
        additional: t.notFound,
        absences: t.notFound,
        comments: t.notFound,
      },
      {
        key: '3',
        history: '2022-01-03',
        entrance: '10.5 ' + t.am,
        exit: '1' + t.pm,
        datesAttendance: '10 ' + t.am,
        datesExit: '12 ' + t.pm,
        delays: '30 minutes',
        additional: '60 minutes',
        absences: t.notFound,
        comments: t.notFound,
      },
    ];

    const columns2: TableProps['columns'] = [
      {
        title: t.datesArrest,
        dataIndex: 'datesArrest',
        key: 'datesArrest',
      },
      {
        title: t.basicSalary,
        dataIndex: 'basicSalary',
        key: 'basicSalary',
      },
      {
        title: t.additional,
        dataIndex: 'additional',
        key: 'additional',
      },
      {
        title: t.delays,
        dataIndex: 'delays',
        key: 'delays',
      },
      {
        title: t.deductions,
        dataIndex: 'deductions',
        key: 'deductions',
      },
      {
        title: t.bonuses,
        dataIndex: 'bonuses',
        key: 'bonuses',
      },
      {
        title: t.target,
        dataIndex: 'target',
        key: 'target',
      },
      {
        title: t.balanceDeb,
        dataIndex: 'balanceDeb',
        key: 'balanceDeb',
      },
      {
        title: t.balanceCred,
        dataIndex: 'balanceCred',
        key: 'balanceCred',
      },
      {
        title: t.netSalary,
        dataIndex: 'netSalary',
        key: 'netSalary',
      },
      {
        title: t.comments,
        dataIndex: 'comments',
        key: 'comments',
      },
    ];
    const data2 : DataSalaryTable2[] = [
      {
        key: '1',
        datesArrest: '2022-01-01',
        basicSalary: 4000,
        additional: 200,
        delays: 150,
        deductions: 200,
        bonuses: 600,
        target: 100,
        balanceDeb: 100,
        balanceCred: 0,
        netSalary: 3300,
        comments: t.notFound,
      },
      {
        key: '2',
        datesArrest: '2022-02-01',
        basicSalary: 5000,
        additional: 100,
        delays: 150,
        deductions: 200,
        bonuses: 600,
        target: 100,
        balanceDeb: 0,
        balanceCred: 45,
        netSalary: 4300,
        comments: t.notFound,
      },
      {
        key: '3',
        datesArrest: '2022-03-01',
        basicSalary: 9000,
        additional: 150,
        delays: 650,
        deductions: 100,
        bonuses: 200,
        target: 120,
        balanceDeb: 65,
        balanceCred: 150,
        netSalary: 7600,
        comments: t.notFound,
      },
    ]
  return (
    <>
      <div className="table-salary">
        <h3> {t.salaryTable} </h3>
        <Table
          className="table-salary-content"
          columns={columns}
          dataSource={data}
          // pagination={true}
          scroll={{ x: 'max-content' }}
          // bordered
          //   title={() => <b>{t.salaryTable}</b>}
        />
      </div>
      <div className="table-salary" style={{ marginTop: '50px' }}>
        <h3> {t.departmentFinance} </h3>
        <Table
          className="table-salary-content"
          columns={columns2}
          dataSource={data2}
          // pagination={true}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </>
  );
};

export default TableSalary