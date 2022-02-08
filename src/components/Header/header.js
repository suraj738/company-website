import Companylogo from './company-logo.jpg'
import Headercss from './header.module.css'
import {Link} from 'react-router-dom';
function Header() {
    return(
        <div className="row">
            <div className={Headercss.headerbgcolor + ' col-12'}>
            <img className={Headercss.logoimg} src={Companylogo} alt="companylogo"/>
            <span  className={Headercss.companyname} >Company Website</span>
        <ul className="fright" >
            <li className={Headercss.headernav + ' menu'}> <Link to='/home'> <a>Home</a></Link></li> 
             <li className={Headercss.headernav + ' menu'}> <Link to='/about'> <a>About</a></Link></li>
             <li className={Headercss.headernav + ' menu'}> <Link to='/services'> <a>Services</a></Link></li>
             <li className={Headercss.headernav + ' menu'}> <Link to='/contact'> <a>Contact</a></Link></li>
        </ul>
        </div>
        </div>
    );
  }
  export default Header;