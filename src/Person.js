import React from "react";
import "./App.css";

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			intervall: null,
			timer: 0,
		};
		//  console.log("run constructor");
	}

	componentDidMount = () => {
		console.log("run componentDidMount ");

		this.setState({
			intervall: setInterval(() => {
				this.setState({ timer: this.state.timer + 1 });
			}, 1000),
		});
	};
	componentWillUnmount = () => {
		console.log("run componentWillUnmount ");
		clearInterval(this.state.intervall);
	};

	render() {
		console.log("run render");
		return (
			<div className="card" style={myStyle}>
				<h1 className="card-header" style={{ color: "blue" }}>
					{this.props.Person.fullNAME}
				</h1>
				<div className="card-body">
					<h3 className="card-title">{this.props.Person.bio}</h3>
					<span>{this.props.children}</span>
					<p className="card-text">{this.props.Person.profession}</p>
				</div>
				<p style={{ fontSize: "20px" }}> Count: {this.state.timer}</p>
			</div>
		);
	}
}
const myStyle = { width: "50vw", marginLeft: 300 };
export default Person;
