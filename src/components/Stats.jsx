import { Container,Row,Col,Card,CardGroup } from "react-bootstrap";
import {IoPricetagOutline} from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import {FaHandHoldingUsd} from 'react-icons/fa'
import Chart from 'react-apexcharts'
import { useState } from "react";
import {FaEthereum,FaBtc} from 'react-icons/fa'
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
                    <Card className="statscard">
                    <img className='statsIce1' src={statsIce1}/>
                        <Card.Title style={{fontSize:"16px"}}>
                            Token Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoPricetagOutline style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             $0.000063
                        </Card.Text>
                        <Chart className='statschart' width='100' type='area' options={option}
                            series={[{name:'series-1',data:[30,40,50,20,60,2]}]}/>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard">
                    <img className='statsIce2' src={statsIce2}/>
                        <Card.Title style={{fontSize:"15px"}}>
                            Reward Distributed
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaBtc style={{marginRight:"0px"}}/>
                            +
                            <FaEthereum style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             22,146 ETH + BTC
                        </Card.Text>
                        <Chart className='statschart' width='100' type='area' options={option}
                            series={[{name:'series-1',data:[35,40,50,25,40,30]}]}/>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard">
                    <img className='statsIce3' src={statsIce3}/>
                        <Card.Title style={{fontSize:"15px"}}>
                            Dividend Holders
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <FaHandHoldingUsd style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                             2,937
                        </Card.Text>
                        <Chart className='statschart' width='100' type='area' options={option}
                            series={[{name:'series-1',data:[30,40,5,20,60,20]}]}/>
                    </Card>
                </Col>
                </Row>
            </Container>
    );
}
export default Stats;