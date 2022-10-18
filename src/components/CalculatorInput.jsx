import { Container,Row,Col,Card} from "react-bootstrap";
import {IoStatsChart} from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import Chart from 'react-apexcharts'
import { useEffect } from "react";
import axios from 'axios'
import Logo from "./Logo";
import statsIce4 from "../assets/images/snow/ice 1.png";
import statsIce5 from "../assets/images/snow/ice 3.png";


const CalculatorInput = () => {
    const [holdingText,setHoldingText] = useState('10,000 HOHOHO');
    const [tradingText,setTradingText] = useState('$88.51 USD');
    const [tokenText,setTokenText] = useState('$0.0002 USD');
    const rewardPercent = 0.04;
    const supply = 1000000000 //1 billion
    var [holding,setHolding] = useState(10000)
    var [volume,setVolume] = useState(88.51)
    const [reward,setReward] = useState(0)
    const [ethprice,setEthPrice] = useState(0)
    const [btcprice,setBtcPrice] = useState(0)
    const [graphData,setGraphData] = useState([{
        name: 'ETH',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }, {
        name: 'BTC',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }])

    useEffect(()=>{
        getCoinPrices()
        calculateEarning()
    },[volume,holding])

    async function getCoinPrices(){
        var btc = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
        var eth = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
        console.log(btc)
        setBtcPrice(btc['data'][0]['current_price'])
        setEthPrice(eth['data'][0]['current_price'])
    }

    function calculateEarning(){
        console.log("Holding: "+holding+" volume: "+volume)
        var reward = (volume*rewardPercent)
        reward = reward * ((holding/supply))
        setReward(reward)
        console.log("reward: "+reward)
        graphDataPopulate()
    }

    function graphDataPopulate(){
        var arr = new Array()
        var arrbtc = new Array()
        var rewardEthPerDay = ((reward/2)/ethprice)
        var rewardBtcPerDay = ((reward/2)/btcprice)
        for(var i=1;i<31;i++){
            arr.push(Math.round(((rewardEthPerDay*i)*10000))/10000)
            arrbtc.push(Math.round(((rewardBtcPerDay*i)*10000))/10000)
        }
        setGraphData([{
            name: 'ETH',
            data: arr
          }, {
            name: 'BTC',
            data: arrbtc
          }])
    }

    function onHoldingClick(e){
        var element = e.target
        var value = e.target.value
        if(value === ''){
            element.setSelectionRange(0,0);
        }
        else{
            element.setSelectionRange(value.length-5,value.length-5)
        }
    }

    function onChangeHolding(event){
        var value = event.target.value
        var length = 0
        var element = event.target
        //preprocess
        value = value.replaceAll(',','')
        value = value.replace(' HOHOHO','')
        //integer check
        var val=parseInt(value)
        setHolding(val)
        if(isNaN(val)){
            setHolding(0)
            setHoldingText('')
        }
        else{
            length = val.toLocaleString().length
            setHoldingText(val.toLocaleString()+' HOHOHO')
        }
        setTimeout((length)=>{
            element.setSelectionRange(length,length)
        },0,length)
        
    }

    function onChangeVolumeorToken(e,bool){
        var val = e.target.value
        var isFloat = val.includes('.')
        //preprocess
        val = val.replace('$','')
        val = val.replace(' USD','')
        //check decimal
        if(val.slice(val.length-1)==='.'){
            //do nothings
        }
        else{
            val = parseFloat(val)
            console.log("wow val "+val)
            setVolume(val)
            if(bool){
                val = Math.round(val*100)/100
            } 
            else{
                val = Math.round(val*10000)/10000
            }
            if(isFloat!==val.toString().includes('.')){
                val+='.'
            }
        }
        var length = val.toString().length + 1
        if(isNaN(val)){
            setVolume(0)
            if(bool){
                setTradingText('$0 USD')
            }else{
                setTokenText('$0 USD')
            }
            length = 1
        }
        else{
            if(bool){
                setTradingText('$'+val+' USD')
            }
            else{
                setTokenText('$'+val+' USD')
            }
        }
        //move cursor
        // console.log('length '+length)
        setTimeout((length)=>{
            e.target.setSelectionRange(length,length)
        },0,length)
    }

    function onChangeToken(e){
        
    }

    return(
        <Container style={{marginTop:'25px'}}>
            <Row>
                <Col xl>
                    <Card className="statscard text">
                    <img className='statsIce4' src={statsIce5}/>
                        <Card.Title style={{fontSize:"16px"}}>
                            $HOHOHO Holdings
                        </Card.Title>
                        <Card.Text className="bold">
                            <Logo marginRight={7} size={30}/>
                            <input onClick={(e)=>onHoldingClick(e)} type='text' value={holdingText} onChange={(e)=>{onChangeHolding(e)}} className='calculatorinput'>
                            </input>
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard">
                        <Card.Title style={{fontSize:"15px"}}>
                            Trading Volume
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoStatsChart style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                            <input type='text' value={tradingText} onChange={(e)=>{onChangeVolumeorToken(e,true)}} className='calculatorinput'>
                            </input>
                        </Card.Text>
                    </Card>
                </Col>
                <Col xl>
                    <Card className="statscard">
                    <img className='statsIce5' src={statsIce4}/>
                        <Card.Title style={{fontSize:"15px"}}>
                            Token Price
                        </Card.Title>
                        <Card.Text className="bold">
                            <IconContext.Provider value={{size:"25px"}}>
                            <IoStatsChart style={{marginRight:"10px"}}/>
                            </IconContext.Provider>
                            <input type='text' value={tokenText} onChange={(e)=>{onChangeVolumeorToken(e,false)}} className='calculatorinput'>
                            </input>
                        </Card.Text>
                    </Card>
                </Col>
                </Row>
                <div className='tablecontainer'>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <th colspan='3' style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',paddingRight:'20px'}}>Reward</th>
                            <th>Daily</th>
                            <th>Weekly</th>
                            <th>Monthly</th>
                            <th style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>Yearly</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{paddingRight:'20px'}} colspan='3'>BTCB</td>
                            <td>{Math.round((reward/2)/btcprice * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/btcprice)*7 * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/btcprice)*30 * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/btcprice)*365 * 10000)/10000}</td>
                        </tr>
                        <tr>
                            <td style={{paddingRight:'20px'}} colspan='3'>WETH</td>
                            <td>{Math.round((reward/2)/ethprice * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/ethprice)*7 * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/ethprice)*30 * 10000)/10000}</td>
                            <td>{Math.round(((reward/2)/ethprice)*365 * 10000)/10000}</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <Chart className='calculatechart' type='area' series={graphData} width='100%' options={{
                chart:{background:"transparent",toolbar:{
                    show:false
                }},
                dataLabels:{enabled:false},
                tooltip:{enabled:false},
                xaxis:{
                    axisBorder:{
                    color:'#fff'
                    },
                    axisTicks:{
                      color:"#fff"
                    },
                    labels:{
                        style:{
                            colors:'#3f4240'
                        }
                    }
                },
                yaxis:{
                    labels:{
                        style:{
                            colors:"#fe0000"
                        }
                    },
                    title:{
                        text: "Total Reward",
                        rotate: -90,
                        style:{
                            color: "#fe0000"
                        }
                    }
                },
                legend:{
                    showForSingleSeries:true,
                    labels:{
                        colors:"#fff"
                    }
                }
            }}/>
            
            </Container>
    );
}
export default CalculatorInput;