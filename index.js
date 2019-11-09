import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Data from './components/Data';
import data from './data';
import './index.css';

const App = () => {
  const [finalData, setFinalData] = useState([]);
  const [regTarget, setRegTarget] = useState([]);
  
  const filterData = (v, regTarget) => {
    setFinalData(v);
    setRegTarget(regTarget);
  };

  return <div className='container'>
    <Search className='search' data={data} filterData={filterData} />
    <Data className='data' data={finalData} regTarget={regTarget} />
  </div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);