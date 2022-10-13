import { Alert, Container} from 'react-bootstrap'
import NavbarComponent from './NavbarComponent';
import {CgDanger} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import CalculatorInput from './CalculatorInput';
import Chart from 'react-apexcharts'
import Logo from './Logo';

const Calculator = () => {
    
    return(
        <div className="homediv">
            <NavbarComponent/>
            <Container className='homecontainer text'>

                <h1 className='pagebanner'>
                <Logo size={50} marginRight={10}/>
                     <div className='vline'/>
                     Earnings Calculator
                </h1>

                <Alert variant='danger' style={{fontSize:'15px',height:"fit-content"}}>
                    <div>
                    <IconContext.Provider value={{size:'30px'}}>
                    <CgDanger  style={{position:'absolute',top:'12px'}}/>
                    </IconContext.Provider>
                    <div style={{marginLeft:'35px'}}>
                    Calculate your current and potential earnings below while holding $PALS Token!
                    </div>
                    </div>
                </Alert>

                <CalculatorInput/>
                
            </Container>
            
        </div>
    );
}

export default Calculator;