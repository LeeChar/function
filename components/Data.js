import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ClipboardJS from 'clipboard';
import $ from 'jquery';

import '../color.css';
import '../customize.css';
import copyBtn from '../copyBtn';

let timer = null;

const copySuccess = () => {
  if (timer) return false;

  const ele = $('<div>复制成功</div>').css({
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '5px 10px',
    position: 'fixed',
    top: 20,
    opacity: 0,
    left: 100,
    transform: 'translate(-50%, 0)',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px #d2c5c5',
    textAlign: 'center'
  }).animate({
    opacity: 1
  }, 'fast');
  $('body').append(ele);

  timer = setTimeout(() => {
    ele.animate({
      opacity: 0
    }, () => {
      ele.remove();
      clearTimeout(timer);
      timer = null;
    });
  }, 1500);
};

export default props => {
  const { data, className } = props;

  const setColor = () => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  useEffect(() => {
    setColor();
    $('pre').each((i, item) => {
      const copyEle = $(copyBtn).css({
        position: 'absolute',
        width: 30,
        height: 30,
        top: 0,
        right: -50,
        cursor: 'pointer'
      }).addClass('btn');

      const [com, func] = data[i].split('-');
      copyEle.attr('data-clipboard-text', com + '\n\n' + func + '\r\n');
      $(item).append(copyEle);
    });


    const clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
      copySuccess();
      e.clearSelection();
    });

  }, [data]);

  return <div className={className}>
    {
      data.map((item, i) => {
        const [com, func] = item.split('-');
        return <ReactMarkdown key={i} source={'```javascript\r\n' + com + '\n\n' + func + '\r\n'} />;
      })
    }
  </div>;
};