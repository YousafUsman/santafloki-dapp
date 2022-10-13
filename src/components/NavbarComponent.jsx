import { Alert, Container,Navbar } from 'react-bootstrap'
import { ethers } from 'ethers'
import { MdLink}  from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useContext } from 'react'
import { Context } from '../App'
import WalletConnectProvider from '@walletconnect/web3-provider'
import MetaMask from '../assets/images/metamask.png' 
import WalletConnect from '../assets/images/walletconnect.png' 
import {IoCloseSharp} from 'react-icons/io5'
import { useState } from 'react'
import {AiFillWarning} from 'react-icons/ai'

const NavbarComponent = (props) =>{

    const [connectClick,setConnectClick] = useState(false)
    const [show,setShow] = useState(false)

    if(window.ethereum){
    window.ethereum.on('accountsChanged', () =>{
        setConnected(false);
        console.log("Umar account changed");
    })

    window.ethereum.on('chainChanged', (chainId)=>{
            window.location.reload();
        })
    }

    function onClick(){
        if(!connectClick){
            document.getElementById('walletrow').style.display='flex'
            document.getElementById('connectbtn').style.display='none'
        }
        else{
            document.getElementById('walletrow').style.display='none'
            document.getElementById('connectbtn').style.display='inline'
        }
        setConnectClick(!connectClick)
    }

    const [toggle,setToggle,connected,setConnected,address,setAddress] = useContext(Context)

    async function onWalletConnect(){
        const provider = new WalletConnectProvider({
            infuraId:'469c1eaffa214f6faa3207112faa2c83'
        });
        const response = await provider.enable();
        try{
        if(response.length!==0){
            setConnected(true)
            setAddress(response[0])
        }
        }catch{
        console.log("Failed connection");
        } 
    }

    function metamaskAlert(){
        setShow(true);
        setTimeout(()=>{
            setShow(false);
        },1500);
    }

    async function onConnect(){
        if(!window.ethereum){
            metamaskAlert()
        }
        else{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        if(!connected){
            const response = await provider.send("eth_requestAccounts",[])
            console.log(response)
            // const signer = provider.getSigner()
            if(response.length === 0){
                setConnected(false)
                
            }
            else{
                setConnected(true)
                setAddress(response[0])
                // props.callback(provider,response[0])
            }
        }
    }
    }

    function onDisconnect(){
        setConnected(false);
    }

    function onToggle(){
        console.log("wow")
        setToggle(true);
        document.getElementById('navbar').style.marginLeft='10px'
    }



    return(
        <Navbar className="navbg">
            <Container>
                <Alert show={show} variant='warning' className='connectionalert text'>
                    <IconContext.Provider value={{size:'25px'}}>
                        <AiFillWarning style={{marginRight:'10px',color:'yellow'}}/>
                    </IconContext.Provider>
                    Metamask not detected!
                </Alert>
            <IconContext.Provider value={{color:'white',size:'20px'}}>
                <AiOutlineMenuUnfold onClick={onToggle} className='hometoggleicon'/>
            </IconContext.Provider>
                <Navbar.Collapse className="justify-content-end">
                    {!connected?
                    <>
                    <button id='connectbtn' className='text navconnectbtn' onClick={onClick}>
                        Connect
                        <IconContext.Provider value={{size:'20px'}}>
                        <MdLink style={{marginLeft:"10px",marginRight:'2px'}}/>
                        </IconContext.Provider>
                    </button>
                    <div id='walletrow' className='walletdiv'>
                        <img className='walletitem' src={MetaMask} onClick={onConnect}/>
                        <img className='walletitem' src={WalletConnect} onClick={onWalletConnect}/>
                        <IconContext.Provider value={{size:'38px'}}>
                            <IoCloseSharp className="walletcross" onClick={onClick}/>
                        </IconContext.Provider>
                    </div>
                    </>:
                    <button className='text navconnectbtn' onClick={onDisconnect} style={{display:'inline'}}>
                        Disconnect
                        <IconContext.Provider value={{size:'20px'}}>
                        <MdLink style={{marginLeft:"10px",marginRight:'2px'}}/>
                        </IconContext.Provider>
                    </button>}           
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;