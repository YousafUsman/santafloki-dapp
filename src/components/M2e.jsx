import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import Chart from 'apexcharts'
import Logo from './Logo';

const M2e = () =>{
    return(
        <div className="homediv">
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                <Logo size={50} marginRight={10}/>
                     <div className='vline'/>Move-2-Earn (M2E)
                </h1>

                <Alert variant='danger' style={{fontSize:'15px',height:"fit-content"}}>
                
                        <div>
                            <CgDanger style={{display:'inline-block ',marginRight:'10px',fontSize:'25px', paddingBottom:'2px',color:'white'}}/>
                            <div style={{display:'inline-block',color:'white'}}>Coming soon</div>
                            <div style={{marginLeft:'35px'}}>$PALS-inspired M2E (Move-2-Earn) is coming soon to join the $PALS Token Ecosystem. Keep an eye on our announcements for more info!</div>
                        </div>
                        
                </Alert>

            </Container>
            
        </div>
    );
}

export default M2e;