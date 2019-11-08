import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Data from './components/Data';
import data from './data';
import './index.css';

const App = () => {
  const [finalData, setFinalData] = useState([]);
  
  const filterData = v => {
    setFinalData(v);
  };

  return <div className='container'>
    <Search className='search' data={data} />
    <Data className='data' data={finalData} />
  </div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);