import { Alert, Container, Row} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import Chart from 'apexcharts'
import Logo from './Logo';
import Stats1 from './Stats1';
import bgimg from '../assets/images/imgbg.jpg';
import Doc1 from '../assets/images/Doc1.jpg';
import Doc2 from '../assets/images/Doc2.png';

const Documents = () =>{
    return(
        <div className="homediv">
                    <img className='bgimg' src={bgimg}/>
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                    <Logo size={50} marginRight={10}/>
                     <div className='vline'/>Documents
                </h1>
            <div className = "documents">

                <div>
                    <img className='docs doc1' src={Doc1} style={{width:"300px",height:"180px", marginLeft:"28px"}} />
                        <b style={{marginLeft:'-210px'}}>Comming soon...</b>
                </div>

                <div>      
                    <a href='https://aptoslabs.com/'>
                      <img className='docs doc2' src={Doc2} style={{width:"340px" , height:"210px"}}/>
                    </a>
                </div>

            </div>

            </Container>
            
        </div>
    );
}

export default Documents;