import { RiReactjsFill } from "react-icons/ri";
import { BsSuitHeartFill } from "react-icons/bs";
const About = () => {
	return ( 
		<div className="inner-content" id="about">
			<div className="inner-content-grid-child" id="headpalm">					
				<h1>Hi I'm Chris</h1>
				<p>I'm a walking HR Violation that <BsSuitHeartFill style={{color:"red"}} />'s to code new things</p>
			</div>
			<div className="inner-content-grid-child">
			<h2>Built with more <RiReactjsFill style={{color: "#80DEEA", position: "relative", top: "5px"}} />REACT JS <BsSuitHeartFill style={{color:"red"}} /></h2>
				<p>I've been in the web development racket for 10+ years.</p>
			</div>
		</div>
	 );
}
 
export default About;