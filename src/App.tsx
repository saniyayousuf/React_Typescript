import React, { useState } from 'react';
import Input from './components/BAInput';
import Button from './components/BAButton';
import Card from './components/BACard';
import Select from './components/BASelect';
import Table from './components/Btable';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [tableData, setTableData] = useState([
    { name: 'zunair', age: '15' },
    { name: 'Mehroz', age: '16' },
    { name: 'Ahad', age: '18' },
    { name: 'Kashif', age: '12' },
    { name: 'Amir', age: '13' },
  ]);
  const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const SelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const AddRow = () => {
    setTableData([...tableData, { name: inputValue, age: selectValue }]);
    setInputValue('');
    setSelectValue('');
  };
  return (
    <div>
      <Input value={inputValue} onChange={InputChange} />
      <Input value={inputValue} onChange={InputChange} />
      <Select options={['18', '25', '30']} value={selectValue} onChange={SelectChange} />
      <Select options={['18', '25', '30']} value={selectValue} onChange={SelectChange} />
      <Button label="Add Row" onClick={AddRow} />
      <Button label="Add Row" onClick={AddRow} />
      <Card title="Example Card" content="Lorem ipsum dolor sit amet." />
      <Card title="Example Card" content="Lorem ipsum dolor sit amet." />
      <Table data={tableData} />
      <Table data={tableData} />
    </div>
  );
};
export default App;
