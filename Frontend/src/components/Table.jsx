import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="flex justify-center overflow-x-auto p-4">
      <table className="min-w-[80%] border border-[#324664] border-collapse">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="border-b border-[#324664] bg-[#0a3773] text-white
                  p-2 md:p-4 text-center text-sm md:text-base lg:text-xl font-normal
                  mb-2 mt-4 mr-4"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-[#00193c]">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="text-white p-2 text-center text-xs md:text-sm lg:text-base"
                >
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
