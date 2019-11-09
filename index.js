import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Data from './components/Data';
import data from './data';
import './index.css';

const App = () => {
  const [finalData, setFinalData] = useState([]);
  
  const filterData = (v, regTarget) => {
    setFinalData(v);
  };

  return <div className='container'>
    <h1 style={{textAlign: 'center'}}>函数方法搜索</h1>
    <Search className='search' data={data} filterData={filterData} />
    <Data className='data' data={finalData} />
  </div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);