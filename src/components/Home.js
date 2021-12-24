import { BsSuitHeartFill } from "react-icons/bs";
const Home = () => {
	const innerContentScreenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return ( 
		<div className="inner-content" id="home" style={{'height':innerContentScreenHeight - "93"}}>
			<div className="inner-content-grid">
				<div className="inner-content-grid-child">					
					<h1>CSS Grid &amp; Flexbox</h1>
					<p>Modern coding with less code. NO Page Builder BLAH!</p>
				</div>
				<div className="inner-content-grid-child">					
					<h2>Built with Much REACT JS <BsSuitHeartFill style={{color: "red", position: "relative", top: "5px"}} /></h2>
				</div>
			</div>
		</div>
	 );
}
 
export default Home;