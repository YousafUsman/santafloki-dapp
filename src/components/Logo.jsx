import logo from '../assets/images/logo.png'
const Logo = (props) =>{
    return(
        <img style={{height:props.size,marginLeft:props.marginLeft,marginRight:props.marginRight,marginTop:props.marginTop}} src={logo}/>
    );
}
export default Logo;