import { UseMutateFunction } from "@tanstack/react-query";

export enum Language {
  en = 'en',
  ar = 'ar',
}

export interface UserState {
  user: string | null;
  token: string | null;
  currentLang: Language;
}
export interface GetItemProps {
  key: string | '';
  label: string | '';
  icon?: string | JSX.Element;
  children?: GetItemProps[] | null;
}

export interface DataType {
  title?: string | JSX.Element;
  dataIndex?: string;
  key?: string | number;
  name?: string;
  id?: number;
  phone?: number;
  duty?: string;
  offduty?: string;
  time?: string;
  date?: string;
  filteredValue?: string[];
  onFilter?: (value: string, record: { name: string }) => boolean;
  //   onFilter: (value: boolean | Key, record: DataType) => boolean;
  render?: (text: string) => JSX.Element;
  filters?: { text: string; value: string }[];
  onFilterDropdownVisibleChange?: (visible: boolean) => void;
}
export type DataSalaryTable = {
  key: string | number;
  history: string | undefined;
  entrance: string | undefined;
  exit: string | undefined;
  datesAttendance: string | undefined;
  datesExit: string | undefined;
  delays: string | undefined;
  additional: string | undefined;
  absences: string | undefined;
  comments: string | undefined;
};

export type DataSalaryTable2 = {
  key: string | number;
  datesArrest: string | undefined;
  basicSalary: number | undefined;
  additional: number | undefined;
  delays: number | undefined;
  deductions: number | undefined;
  bonuses: number | undefined;
  target: number | undefined;
  balanceDeb: number | undefined;
  balanceCred: number | undefined;
  netSalary: number | undefined;
  comments : string | undefined
};
export type authLogIn = {
  email: string;
  password: string;
  name?: string;
}
export type ResLogIn = {
  data: {
    token: string;
    message: string;
  };
}
export type HandleError = {
  response: {
    data: {
      errorMessage?: string;
      message: string;
    };
  };
};
export interface LocalizationTypes {
  t: {
    name?: string;
    id?: string;
    phone?: string;
    duty?: string;
    offduty?: string;
    time?: string;
    date?: string;
    logout?: string;
    login?: string;
    home?: string;
    delete?: string;
    edit?: string;
    save?: string;
    search?: string;
    add?: string;
    calculationTitle?: string;
    calculationTitle1?: string;
    calculationTitle2?: string;
    calculationTitle3?: string;
    calculationTitle4?: string;
    male?: string;
    female?: string;
    serialNumber?: string;
    job?: string;
    gender?: string;
    maritalStatus?: string;
    maritalStatus1?: string;
    maritalStatus2?: string;
    age?: string;
    lastCaptured?: string;
    dateBirth?: string;
    status?: string;
    status1?: string;
    status2?: string;
    status3?: string;
    dateJoin?: string;
    dataEit?: string;
    study?: string;
    study1?: string;
    study2?: string;
    study3?: string;
    dataLast?: string;
    salary?: string;
    salaryTable?: string;
    history?: string;
    entrance?: string;
    exit?: string;
    datesAttendance?: string;
    departureDates?: string;
    delays?: string;
    datesExit?: string;
    additional?: string;
    absences?: string;
    comments?: string;
    notFound?: string;
    am?: string;
    pm?: string;
    datesArrest?: string;
    basicSalary?: string;
    deductions?: string;
    bonuses?: string;
    target?: string;
    balanceDeb?: string;
    balanceCred?: string;
    netSalary?: string;
    departmentFinance?: string;
    loginTitle?: string;
    email?: string;
    password?: string;
    forgetPassword?: string;
    userName?: string;
    requiredName?: string;
    requiredPassword?: string;
    requiredEmail?: string;
    noAccount?: string;
    register?: string;
    notDesc1?: string;
    notDesc2?: string;
    notBtn?: string;
    registerTitle?: string;
    account?: string;
    addEmployee?: string;
    dashboard?: string;
    profile?: string;
    employees?: string;
    addEmployeeLink?: string;
    about?: string;
    contact?: string;
    uploadFile?: string;
    requiredNameMin?: string;
    requireJob?: string;
    workingStatus?: string;
    requireWorkingStatus?: string;
    trainee?: string;
    employee?: string;
    graduate?: string;
    fullTime?: string;
    requireGender?: string;
    birthDate?: string;
    requiredBirthDate?: string;
    joinedDate?: string;
    requiredJoinedDate?: string;
    requiredBasicSalary?: string;
    education?: string;
    others?: string;
    deleteEmployee?: string;
    employeePage?: string;
    okText?: string;
    cancelText?: string;
    deleteMes?: string;
    deletedesc?: string;
    successDelete?: string;
    loginFirst?: string;
    canceled?: string;
    searchName?: string;
    dismissed?: string;
  };
}

export interface MyMutationResult {
  isLoading: boolean;
  mutate: UseMutateFunction<unknown, Error, authLogIn, unknown>;
  data?: unknown;
  error?: Error;
  isError: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  isLoadingError: boolean;
  isRefetchError: boolean;
  isMutating: boolean;
  reset: () => void;
  mutateAsync: (data?: authLogIn) => Promise<unknown>;
}

export type ErrorMessage = { response: { data: { message: string } } };
export interface AttendanceTime {
    'AC-No.'?: number;
    'Real time'?: number;
    NDays?: number;
    NDays_OT?: number;
    Normal?: number;
    '__rowNum__'?: number;
    Name?: string;
    ATT_Time?: string;
    Date?: string;
    Department?: string;
    'Clock In'?: string;
    'Clock Out'?: string;
    'On duty'?: string;
    'Off duty'?: string;
    'Must C/In'?: string;
    'Must C/Out'?: string;
    'OT Time'?: string;
    Timetable?: string;
    'Work Time'?: string;
}

export type AddEmployeeType = {
  education?: string;
  joinedDate?: string;
  gender?: string;
  isMarried?: boolean;
  birthDate?: string;
  debt?: number;
  baseSalary?: number;
  name?: string;
  job?: string;
  workingStatus?: string;
  salary?: {
    baseSalary?: number;
    debt?: number;
  };
};


