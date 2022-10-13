import {CgPerformance} from 'react-icons/cg'
import {ProSidebar,Menu,MenuItem, SidebarContent} from 'react-pro-sidebar'
import {AiFillCalculator} from 'react-icons/ai'
import {BsBrush,BsCoin} from 'react-icons/bs'
import 'react-pro-sidebar/dist/css/styles.css';
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import {ImStatsDots} from 'react-icons/im';
import {BiNews,BiCoinStack} from 'react-icons/bi';
import {NavLink} from 'react-router-dom'
import {BsCircle} from 'react-icons/bs'
import {BsRecordCircle} from 'react-icons/bs'
import { Context } from '../App';
import { useContext } from 'react';
import {IoGameControllerOutline} from 'react-icons/io5'
import { useEffect } from 'react'
import Logo from './Logo'
import {RiAppsFill, RiCoinsLine} from 'react-icons/ri'

const SidebarComponent = () => {
    const [toggle,setToggle] = useContext(Context)
    const [collapse,setCollapse] = useState(false)
    const [reload,setReload] = useState(false)

    useEffect(()=>{
        console.log("wow")
        focus()
    },[reload])

    function focus(){
        try{
            try{
            document.getElementsByClassName('menuitemfocus')[0].classList.toggle('menuitemfocus')
            }
            catch{
                console.log('No item focused')
            }
        var url = window.location.href
        console.log(url)
        var element = ''
        if(url.includes('calculator')){
            element = document.getElementById('calbtn')
            if(!element.classList.contains('menuitemfocus')){
            element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('statistics')){
            element = document.getElementById('statsbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('articles')){
            element = document.getElementById('newsbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('reward')){
            element = document.getElementById('rewardbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('staking')){
            element = document.getElementById('stakingbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('nft')){
            element = document.getElementById('nftbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('m2e')){
            element = document.getElementById('m2ebtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else if(url.includes('app')){
            element = document.getElementById('m2eappbtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
        else{
            element = document.getElementById('homebtn')
            if(!element.classList.contains('menuitemfocus')){
                element.classList.toggle('menuitemfocus')
             }
        }
    }
    catch{
        console.log("Component not found")
    }
    }

    function onCollapse(){
        setCollapse(!collapse)
        console.log('print')
        document.getElementById('sidenavheader').classList.toggle('sidenavheader')
        document.getElementById('sidenavheader').classList.toggle('sidenavheadercollapsed')
        const titles = document.getElementsByClassName("sidenavheadertitle");
        var style = ""
        if(collapse){
            style = "inline-block"
        }
        else{
            style = "none"
        }
        for(var i=0;i<titles.length;i++){
            titles[i].style.display = style 
        }
    }

    return(
        <div className='sidebardiv'>
            
        <ProSidebar id='navbar' collapsed={collapse} breakPoint='lg' toggled={toggle} onToggle={()=>{
            document.getElementById('navbar').style.marginLeft='0px'
            console.log("print")
            setToggle(false) 
        }}>

            <div className='sidenavheader' id="sidenavheader">
                <Logo size={55} marginLeft={12} marginTop={12}/>
                {!collapse?
                <IconContext.Provider value={{size:"20px",className:'sidenavheadercollapsebtn'}}>
                <BsRecordCircle onClick={onCollapse} id="collapsetoggle">
                </BsRecordCircle>
                </IconContext.Provider>:
                <IconContext.Provider value={{size:"20px",className:'sidenavheadercollapsebtncollapsed'}}>
                <BsCircle onClick={onCollapse} id="collapsetoggle">
                </BsCircle>
                </IconContext.Provider>
}                   
            </div>
            <SidebarContent className='sidebarcontent'>
            <Menu>
                <div className='sidenavheadertitle text'>
                <p>GENERAL</p>
                </div>
                <MenuItem id='homebtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <CgPerformance/>
                    </IconContext.Provider>
                }>
                    Home
                    <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/'></NavLink>
                </MenuItem>
                
                <MenuItem id='statsbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <ImStatsDots/>
                    </IconContext.Provider>
                }>
                    Statistics
                    <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/statistics'></NavLink>
                </MenuItem>
                <MenuItem id='calbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <AiFillCalculator/>
                    </IconContext.Provider>
                }>
                    Calculator
                    <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/calculator'></NavLink>
                </MenuItem>
                <MenuItem id='newsbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <BiNews/>
                    </IconContext.Provider>
                }>
                    Articles
                    <NavLink to='/articles' onClick={()=>{
                        setReload(!reload)
                    }}></NavLink>
                </MenuItem>
                <div className='sidenavheadertitle text'>
                <p>ECOSYSTEM</p>
                </div>
                <MenuItem id='rewardbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <BsCoin/>
                    </IconContext.Provider>
                }>
                    BTC & ETH Rewards
                    <NavLink to='/reward' onClick={()=>{
                        setReload(!reload)
                    }}></NavLink>
                </MenuItem>
                
                <MenuItem id='stakingbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <BiCoinStack/>
                    </IconContext.Provider>
                }>
                    Staking
                    <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/staking'></NavLink>
                </MenuItem>
                <MenuItem id='nftbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <BsBrush/>
                    </IconContext.Provider>
                }>
                    NFTs || Collections
                    <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/nft'></NavLink>
                </MenuItem>
                <MenuItem id='m2ebtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <IoGameControllerOutline/>
                    </IconContext.Provider>
                }>
                NFTs || Move-2-Earn
                <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/m2e'></NavLink>
                </MenuItem>
                <MenuItem id='m2eappbtn' className="menuitem" icon={
                    <IconContext.Provider value={{size:"20px"}}>
                        <RiAppsFill/>
                    </IconContext.Provider>
                }>
                Move-2-Earn App
                <NavLink onClick={()=>{
                        setReload(!reload)
                    }} to='/app'></NavLink>
                </MenuItem>
            </Menu>
            </SidebarContent>
        </ProSidebar>
        </div>
    );
}
export default SidebarComponent;