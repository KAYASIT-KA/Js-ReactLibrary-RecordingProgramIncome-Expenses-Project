import './App.css';
import FormComponents from './components/FormComponents';
import Transaction from './components/Transaction';
import { useState, useEffect } from 'react'
import DataContext from './components/deta/DataContext';
import ReportComponents from './components/RepoetComponents';
import { element } from 'prop-types';

function App() {
  const initdata = [
    // {id:1, list:"เงินเดือน", amount:50000},
    // {id:2, list:"ค่าห้อง", amount:-4000},
    // {id:3, list:"ค่าอาหาร", amount:-2000},
    // {id:4, list:"ค่าเดินทาง", amount:-800}
  ]
  const [lists, setlists] = useState(initdata)
  const [reportIncome, setreportIncome] = useState(0)
  const [reportExpenes, setreportExpenes] = useState(0)
  const onAddNewList = (newList) => {
    setlists((prevlist) => {
      return [newList, ...prevlist]
    })
  }
  useEffect(() => {
    const amounts = lists.map(lists => lists.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expenes = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1
    setreportIncome(income)
    setreportExpenes(expenes)
  }, [lists, reportIncome, reportExpenes])

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expenes: reportExpenes
      }
    }>
      <div className="container">
        <div>
          <h2>โปรแกรมบันทึกบัญชี รายรับ-รายจ่าย</h2>
          <ReportComponents />
          <FormComponents onAddList={onAddNewList} />
          <Transaction list={lists} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
