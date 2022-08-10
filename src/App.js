import './App.css';
import './customjs';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Sidebar from './components/Sidebar/Sidebar';
import PointerNav from './components/PointerNav/PointerNav';
import Header from './components/Header/Header';
import { useState } from 'react';
import About from './components/About/About';

function App() {

  const [sidebar,setSidebar] = useState(false);

  const toggleSidebar=()=>{
    setSidebar(!sidebar);
  }

  return (
    <div className="App">

      <div className='site-main-container'>

        <PointerNav openSidebar={toggleSidebar}/>

        <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar}/>
        
        <div className='main-content-cont'>
          <Header/>
          <About/>
        </div>
      </div>

    </div>
  );
}

export default App;
