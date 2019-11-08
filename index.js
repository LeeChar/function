import React, {useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import data from './data'
import './color.css'
import './customize.css'

const App = () => {
	document.addEventListener('DOMContentLoaded', (event) => {
	  document.querySelectorAll('pre code').forEach((block) => {
	    hljs.highlightBlock(block);
	  });
	});
	
	return <div>
	{
		data.map((item, i) => {
			const [com, func] = item.split('-')
			return <ReactMarkdown key={i} source={'```javascript\r\n' + com + '\n\n' + func + '\r\n'} />
		})
	}
	</div>
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);