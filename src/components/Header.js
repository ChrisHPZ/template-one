import { Link } from 'react-router-dom';
import { HiHome, HiInformationCircle } from "react-icons/hi";
import { RiReactjsFill } from "react-icons/ri";
import Headpalm  from "../img/headpalm.png";
const Header = () => {
	return ( 
		<div className="header-container">
			<div className="header-grid">
				<div className="header-grid-child">
					<RiReactjsFill style={{ width:"48px", height:"48px", color:"#80deea" }} />
					<img src={Headpalm} alt="Chris" width="48" height="48" />
				</div>
				<div className="header-grid-child">
					<ul>
						<li><Link to="/"><HiHome /> Home</Link></li>
						<li><Link to="/about"><HiInformationCircle /> About</Link></li>
					</ul>
				</div>
			</div>
		</div>		
	 );
}
 
export default Header;