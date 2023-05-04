// Style
import "./Bootstrap.css";

// Components
import Heading from "./Heading";
import Form from "./Form";

function App() {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<Heading madeBy="Alfian" socmed="https://github.com/alfianchii">
						Simple Todo-list Application
					</Heading>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<Form />
				</div>
			</div>
		</>
	);
}

export default App;
