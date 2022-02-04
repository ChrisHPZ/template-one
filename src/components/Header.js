import { useRef } from "react";
import { Link } from 'react-router-dom';
import { HiHome, HiInformationCircle } from "react-icons/hi";
import { RiReactjsFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Headpalm  from "../img/headpalm.jpf";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Header = () => {
	const navRef = useRef(null);
	const onToggleClick = (e) => {
		navRef.current.classList.toggle("show");
	};
	return (
		<div className="header-container">
			<div className="header-grid">
				<div className="header-grid-child">
					<img src={Headpalm} alt="Chris" width="48" height="48" />
					<RiReactjsFill style={{ width:"48px", height:"48px", color:"#80deea" }} />
					<BsFacebook style={{ width:"48px", height:"48px", color:"#80deea" }} />
					<BsTwitter style={{ width:"48px", height:"48px", color:"#80deea" }} />
					<BsInstagram style={{ width:"48px", height:"48px", color:"#80deea" }} />
					<BsYoutube style={{ width:"48px", height:"48px", color:"#80deea" }} />					
				</div>
				<div className="header-grid-child">
					<GiHamburgerMenu className="mobile-menu-trigger" onClick={onToggleClick} />
					<ul ref={navRef}>
						<li><Link to="/" onClick={onToggleClick}><HiHome /> Home</Link></li>
						<li><Link to="/about" onClick={onToggleClick}><HiInformationCircle /> About</Link></li>
						<li><Link to="/contact" onClick={onToggleClick}><MdEmail /> Contact</Link></li>
					</ul>
				</div>
			</div>
		</div>		
	 );
}
 
export default Header;