import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import {IoPricetag,IoStatsChart,IoRocketSharp} from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import {FaHandHoldingUsd,FaMoneyBill} from 'react-icons/fa';
import { useState } from "react";
import {AiFillDollarCircle} from 'react-icons/ai';
import statsIce1 from "../assets/images/snow/ice 1.png";
import statsIce2 from "../assets/images/snow/ice 2.png";
import statsIce3 from "../assets/images/snow/ice 3.png";

const Stats = () => {

    const [option, setOption] = useState({
        dataLabels:{enabled:false},
        grid:{show:false},
        tooltip:{enabled:false},
        chart:{toolbar:{show:false}},
        xaxis:{labels:{show:false},crosshairs:{show:false},axisBorder:{show:false},axisTicks:{show:false}},
        yaxis:{labels:{show:false}},
        fill:{colors:['#fe0000']},
        stroke:{colors:['#fe0000']}
     })

    return(
        <Container style={{marginTop:'5px'}}>
            <Row>
                <Col xl>
                    <Card className="statscard1">
                        <Card.Title style={{fontSize:"16px"}}>
                            Current Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoPricetag style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             $0.000063
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">
                    <img className='statsIce2' src={statsIce2}/>
                        <Card.Title style={{fontSize:"15px"}}>
                            Market Cap
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <AiFillDollarCircle style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             $57.28k
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">
                        <Card.Title style={{fontSize:"15px"}}>
                            Dividend Holders
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaHandHoldingUsd style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             2,937
                        </Card.Text>
                    </Card>
                </Col>

                
                </Row>

                <Row>
                <Col xl>
                    <Card className="statscard1">
                    <img className='statsIce1' src={statsIce1}/>
                        <Card.Title style={{fontSize:"16px"}}>
                            24H Volume
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoStatsChart style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             $0.000015
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">

                        <Card.Title style={{fontSize:"15px"}}>
                            Liquidity
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaMoneyBill style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             $20.922K
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard1">
                    <img className='statsIce3' src={statsIce3}/>
                        <Card.Title style={{fontSize:"15px"}}>
                            Launched
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoRocketSharp style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             365 Days ago
                        </Card.Text>
                    </Card>
                </Col>

                
                </Row>
            </Container>
    );
}
export default Stats;