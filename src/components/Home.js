import { BsSuitHeartFill } from "react-icons/bs";
const Home = () => {
	return ( 
		<div className="inner-content" id="home">
			<div className="inner-content-grid-child">					
				<h2>CSS Grid &amp; Flexbox</h2>
				<p>Modern coding with less code. NO Page Builder BLAH!</p>
			</div>
			<div className="inner-content-grid-child">					
				<h2>Built with Much REACT JS <BsSuitHeartFill style={{color: "red", position: "relative", top: "5px"}} /></h2>
			</div>
			<div className="inner-content-grid-child">					
				<h2>I Extend 2 columns <BsSuitHeartFill style={{color: "red", position: "relative", top: "5px"}} /></h2>
			</div>
		</div>
	 );
}
 
export default Home;