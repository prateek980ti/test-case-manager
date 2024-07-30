import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Table from './components/Table'; // Ensure to import the Table component
import columns from './components/columns'; // Ensure to import the columns definition
import SearchBar from './components/Searchbar';
import FilterButton from './components/filter';

function App() {
  const [testcases, setTestcases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testcases')
      .then(response => {
        const dataWithHandlers = response.data.map(testcase => ({
          ...testcase,
          onChangeStatus: handleStatusChange
        }));
        setTestcases(dataWithHandlers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleStatusChange = (event, id) => {
    const newStatus = event.target.value;
    setTestcases(prevTestcases =>
      prevTestcases.map(testcase =>
        testcase.id === id ? { ...testcase, status: newStatus } : testcase
      )
    );

    axios.put(`http://localhost:5000/api/testcases/${id}`, { status: newStatus })
      .then(response => {
        console.log('Status updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  return (
    <div className="bg-[#00193c] min-h-screen pr-4 pl-4">
      <Header />
      <div className='flex items-center justify-center m-7'>
      <SearchBar/>
      </div>
      <FilterButton/>

      <Table columns={columns} data={testcases} />
    </div>
  );
}

export default App;