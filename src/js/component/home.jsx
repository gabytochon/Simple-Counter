import React from "react";
import PropTypes from "prop-types"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center d-flex justify-content-center">
			<div className="bigCounter d-flex fs-1 gap-4 bg-black text-light w-25 justify-content-center">
				<div className="clock" >
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="Seis">
					{props.numberSix % 10}
				</div>
				<div className="Cinco">
					{props.numberFive % 10}
				</div>
				<div className="Cuatro">
					{props.numberFour % 10}
				</div>
				<div className="Tres">
					{props.numberThree % 10}
				</div>
				<div className="Dos">
					{props.numberTwo % 10}
				</div>
				<div className="Uno">
					{props.numberOne % 10}
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
	numberSix: PropTypes.number,
}
export default Home;
