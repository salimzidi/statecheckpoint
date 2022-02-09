import React from "react";
import "./App.css";
import Person from "./Person";

class App extends React.Component {
	toggleVisibility = () => {
		this.setState({ isVisible: !this.state.isVisible });
	};
	state = {
    isVisible: false,
		Person: {
			fullNAME:  "ZIDI Salim",
			bio:
					"Your life becomes a masterpiece when you learn to master peace ..",
			profession: "Full Stack JS Developer.",
		},
		show: false,
	};

	render() {
		return (
			<div className="App">
        
				{this.state.isVisible && (
					<Person Person={this.state.Person}>
						<img src={"sss.jpg"} alt="profile" width={"400px"} />
					</Person>
				)}
        <button
						onClick={this.toggleVisibility}
						className="visibility-btn"
					>
						{this.state.isVisible ? "Hide Person" : "Show Person"}
					</button>
			
			</div>
		);
	}
}

export default App;
