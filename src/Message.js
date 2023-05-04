export default function Message(props) {
	return (
		<>
			{props.children && (
				<div className="alert alert-danger" role="alert">
					{props.children}
				</div>
			)}
		</>
	);
}
