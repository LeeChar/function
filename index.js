import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import ClipboardJS from 'clipboard';
import $ from 'jquery';

import data from './data';
import './color.css';
import './customize.css';
import copyBtn from './copyBtn';

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
		left: '50%',
		transform: 'translate(-50%, 0)',
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

const App = () => {
	document.addEventListener('DOMContentLoaded', (event) => {
	  document.querySelectorAll('pre code').forEach((block) => {
	    hljs.highlightBlock(block);
	  });
	});

	useEffect(() => {
		$('pre').each((i, item) => {
			const copyEle = $(copyBtn).css({
			position: 'absolute',
			width: 30,
			height: 30,
			top:0,
			right: -50,
			cursor: 'pointer'
		}).addClass('btn');

			const [com, func] = data[i].split('-');
			copyEle.attr('data-clipboard-text', com + '\n\n' + func + '\r\n');
			$(item).append(copyEle);
		});
		

		const clipboard = new ClipboardJS('.btn');

		clipboard.on('success', function(e) {
		   	copySuccess();
		    e.clearSelection();
		});

	}, []);
	
	return <div>
	{
		data.map((item, i) => {
			const [com, func] = item.split('-');
			return <ReactMarkdown key={i} source={'```javascript\r\n' + com + '\n\n' + func + '\r\n'} />;
		})
	}
	</div>;
};


ReactDOM.render(
    <App />,
    document.getElementById('app')
);