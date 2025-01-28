import { Box, Meter } from 'grommet';

export const EMPLOYEE_TABLE_COLUMNS_STORAGE_KEY = 'EMPLOYEE_TABLE_COLUMNS';

export const DEFAULT_EMPLOYEE_TABLE_COLUMNS_VIEW = {
  columns: [
    'id',
    'name',
    'email',
    'age',
    'department',
    'joiningDate',
    'role',
    'status',
    'location',
    'salary',
    'percent',
  ],
  properties: {},
};

export const columns = [
  { property: 'id', header: 'ID', size: 'xsmall', pin: true },
  { property: 'name', header: 'Name', size: 'small', pin: true },
  { property: 'email', header: 'Email', size: 'medium' },
  { property: 'age', header: 'Age', size: 'xsmall', pin: true },
  { property: 'department', header: 'Department', size: 'small' },
  { property: 'joiningDate', header: 'Joining Date', size: 'small' },
  { property: 'role', header: 'Role', size: 'small' },
  { property: 'status', header: 'Status', size: 'xsmall' },
  { property: 'location', header: 'Location', size: 'small' },
  { property: 'salary', header: 'Salary', size: 'small' },
  {
    property: 'percent',
    header: 'Complete',
    render: (datum) => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  },
];

export const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    department: 'Engineering',
    joiningDate: '2022-01-15',
    role: 'Software Engineer',
    status: 'Active',
    location: 'New York',
    salary: '$80,000',
    percent: 30,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 34,
    department: 'Marketing',
    joiningDate: '2021-07-10',
    role: 'Marketing Manager',
    status: 'Active',
    location: 'San Francisco',
    salary: '$95,000',
    percent: 25,
  },
  {
    id: 3,
    name: 'Alan Brown',
    email: 'alan.brown@example.com',
    age: 25,
    department: 'Sales',
    joiningDate: '2023-03-01',
    role: 'Sales Executive',
    status: 'Inactive',
    location: 'Chicago',
    salary: '$70,000',
    percent: 20,
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    age: 30,
    department: 'HR',
    joiningDate: '2020-09-20',
    role: 'HR Manager',
    status: 'Active',
    location: 'Boston',
    salary: '$85,000',
    percent: 10,
  },
  {
    id: 5,
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    age: 40,
    department: 'Finance',
    joiningDate: '2018-11-15',
    role: 'Finance Analyst',
    status: 'Active',
    location: 'Seattle',
    salary: '$100,000',
    percent: 50,
  },
];
