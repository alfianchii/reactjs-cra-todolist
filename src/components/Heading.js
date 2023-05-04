export default function Heading(props) {
	return (
		<div className="text-center mb-3">
			<h1>{props.children}</h1>

			<span className="mb-3 mt-2 d-inline-block h6 font-monospace font-weight-light text-muted">
				Made with{" "}
				<svg fill="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart-fill" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
				</svg>{" "}
				by{" "}
				<a href={props.socmed} rel="noreferrer" className="text-decoration-none" target="_blank">
					{props.madeBy}
				</a>
			</span>
		</div>
	);
}
