import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorld}  from './HelloWorld.jsx'
//import {SecondApp} from './SecondApp.jsx'
//<SecondApp/>

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
	<React.StrictMode>
		<HelloWorld/>

	</React.StrictMode>
)
