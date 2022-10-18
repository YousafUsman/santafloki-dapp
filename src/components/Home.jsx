import {Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {TiTick} from 'react-icons/ti'
import Stats from './Stats';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { useContext } from 'react';
import { Context } from '../App';
import { useEffect } from 'react';
import Logo from './Logo';
import vid from '../assets/images/vid.mp4';
import mainlogo from "../assets/images/mainlogo.png";
import bannerIce from "../assets/images/snow/ice 2.png";
import axios from 'axios';

const Home = () => {
    const [provider,setProvider] = useState(null)
    const [toggle,setToggle,connected,setConnected,address,setAddress] = useContext(Context)
    
    useEffect(()=>{
        console.log("wow from connected");
    },[connected]);
    
    function connectionCallback(provider,address){
        setProvider(provider);
        setAddress(address);
    }
    
    function axio(){
       console.log(axios.get("https://api.pancakeswap.info/api/v2/tokens/0x14940169E2Db1595CDD3CACd30DECC5bbB4d9f19"));
    }
    axio();

    return(
        <div className="homediv">
            <video autoPlay muted loop src={vid} />
            <NavbarComponent callback={connectionCallback}/>
           
            <Container className='homecontainer text'>
                <h1 className='pagebanner outline'>
                     <img className='bannerIce' src={bannerIce}/>
                    {/* <IconContext.Provider value={{size:"50px"}}> */}
                    <Logo size={50}/>
                    {/* </IconContext.Provider> */}
                     <div  className='vline' style={{marginLeft:'10px'}}  />
                     Welcome to SantaFloki Dapp
                </h1>
            <img className='homelogo' src={mainlogo}/>
            
            <Stats/>            
            </Container>
            
        </div>
    );
}
export default Home;