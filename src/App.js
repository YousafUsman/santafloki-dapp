import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Fade.css';
import './components/ice.css';
import SidebarComponent from './components/SidebarComponent';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Statistics from './components/Statistics';
import {HashRouter, Route,Routes} from 'react-router-dom'
import { useState,createContext } from 'react';
import Articles from './components/Articles';
import NFT from './components/NFT';
import Documents from './components/Documents';
import Staking from './components/Staking';

export const Context = createContext(null)

function App() {
  const [toggle,setToggle] = useState(false)
  const [connected,setConnected] = useState(false)
  const [address,setAddress] = useState('')
  return (
    <div className='appdiv'>

      <HashRouter>
        <Context.Provider value={[toggle,setToggle,connected,setConnected,address,setAddress]}>
      <SidebarComponent/>
        <Routes>
        <Route
        exact
        path='/'
        element={<Home/>}
        />
        <Route
        exact
        path='/calculator'
        element={<Calculator/>}
        />
        <Route
        exact
        path='/statistics'
        element={<Statistics/>}
        />
        <Route exact path='/articles' element={<Articles></Articles>}/>
        <Route exact path='/nft' element={<NFT></NFT>}/>
        <Route exact path='staking' element={<Staking></Staking>}/>
        <Route exact path='/documents' element={<Documents></Documents>}/>
        </Routes>
        </Context.Provider>
      </HashRouter>
    </div>
    
  );
}

export default App;

