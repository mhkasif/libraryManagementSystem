import React from 'react';

import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './Components/dashboard/Dashboard';


 function App(props) {
// fetch("http://localhost:3300/obooks").then(resp=>resp.json()).then(({data})=>{console.table(data)}).catch(err=>console.log(err))

return (
    <div className="App">
    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
    </div>
  );
}

export default App;
