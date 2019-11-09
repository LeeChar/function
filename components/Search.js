import React from 'react';

export default props => {
  const { data,filterData } = props;

  const inputEle = React.createRef();

  const onKeyUp = e => {
    const keyWord = inputEle.current.value;
    const reg = new RegExp(keyWord, 'g');

    const result = [];
    const regTarget = [];
    data.forEach(item => {
      const target = `<span>${keyWord}</span>`;
      regTarget.push({
        tagName: 'span',
        content: keyWord
      });
      result.push(item.replace(reg, target));
    });
    
    filterData(result, regTarget);
  };

  const { className } = props;
  return <div className={className}>
    <input className='input' type='text' ref={inputEle} onKeyUp={onKeyUp.bind(this)} />
  </div>;
};