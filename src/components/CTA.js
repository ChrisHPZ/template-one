import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaLessThan } from "react-icons/fa";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
const CTA = () => {
	return ( 
		<div className="grid-container-cta">
			<div className="grid-child-cta">
				<h2><MdDoNotDisturbOnTotalSilence /> No bloat</h2>
				<p>Load only what you need</p>
			</div>
			<div className="grid-child-cta">
				<h2><FaLessThan /> Less Markup</h2>
				<p>Code only what's necessary</p>
			</div>
			<div className="grid-child-cta">
				<h2><BsFillEmojiSmileFill /> Smile</h2>
				<p>Your apps are efficient</p>
			</div>
		</div>
	 );
}
 
export default CTA;