import React from 'react';

const columns = [
  {
    header: 'Test Case Name',
    render: (row) => <div>{row.test_case_name}</div>,
  },
  {
    header: 'Estimate Time',
    render: (row) => <div>{row.estimate_time} Minutes</div>,
  },
  {
    header: 'Module',
    render: (row) => <div>{row.module}</div>,
  },
  {
    header: 'Priority',
    render: (row) => <div>{row.priority}</div>,
  },
  {
    header: 'Status',
    render: (row) => (
      <select
        value={row.status}
        onChange={(e) => row.onChangeStatus(e, row.id)}
        className={`${
          row.status === 'Select' ? 'bg-[#00193c]' : 'bg-[#916ed7]'
        } text-white border border-[#324664] rounded-md focus:bg-[#916ed7] text-center
        w-20 h-8 p-1
        sm:w-24 md:w-28 lg:w-32`} // Adjusted responsive widths
      >
        <option value="Select" className="bg-[#00193c]">Select</option>
        <option value="PASS" className="bg-[#916ed7]">PASS</option>
        <option value="FAIL" className="bg-[#916ed7]">FAIL</option>
      </select>
    ),
  },
];

export default columns;
