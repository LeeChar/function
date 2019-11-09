import React from 'react';

export default props => {
  const { data,filterData } = props;
  const inputEle = React.createRef();
  const result = [];

  const onKeyUp = e => {
    const keyWord = inputEle.current.value;
    const reg = new RegExp(keyWord, 'ig');
    if (keyWord === '') return filterData([]);
    data.forEach(item => {
      if (reg.test(item)) {
        result.push(item);
      }
    });
    filterData(result);
  };

  const { className } = props;
  return <div className={className}>
    <input className='input' type='text' ref={inputEle} onKeyUp={onKeyUp.bind(this)} />
  </div>;
};