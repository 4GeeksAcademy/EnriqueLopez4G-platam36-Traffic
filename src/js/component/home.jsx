import React, {useState} from "react";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	const [order, setOrder] = useState(true);

	const handleOrder=()=> {
		setOrder(!order);
	}
	return (
		<div className="container">
			<h2>Traffic Light</h2>
        	<hr/>
        	<h3 className ="text-primary">Enrique Lopez 4Geeks</h3>
			<TrafficLight order = {order}/>
			<button type="button" className="btn btn-primary" onClick = {handleOrder} >Interchange Colors</button>
		</div>
		
	);
};

export default Home;
