import React from 'react';

export default props => {
  const { data } = props;

  const inputEle = React.createRef();

  const onKeyUp = e => {
    const keyWord = inputEle.current.value;
    data.forEach(item => {

    });

  };

  const { className } = props;
  return <div className={className}>
    <input className='input' type='text' ref={inputEle} onKeyUp={onKeyUp.bind(this)} />
  </div>;
};