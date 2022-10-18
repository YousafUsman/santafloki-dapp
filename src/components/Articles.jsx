import { Alert, Container} from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg';
import Logo from './Logo';
import bgimg from '../assets/images/imgbg.jpg';

const Articles = () =>{
    return(
        <div className="homediv">
                <img className='bgimg' src={bgimg}/>
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    
                <Logo size={50} marginRight={10}/>
                     <div className='vline'/>Articles and Announcements
                </h1>

                <Alert variant='danger' style={{fontSize:'15px',height:"fit-content"}}>
                
                        <div>
                            <CgDanger style={{display:'inline-block ',marginRight:'10px',fontSize:'25px', paddingBottom:'2px',color:'white'}}/>
                            <div style={{display:'inline-block',color:'white'}}>Coming soon</div>
                            <div style={{marginLeft:'35px'}}>Be informed of all the latest $HOHOHO news all in one place! Here, we will feature all of the latest news as well as important dates for all the upcoming excitment! Coming soon.</div>
                    </div>
                </Alert>

            </Container>
            
        </div>
    );
}

export default Articles;