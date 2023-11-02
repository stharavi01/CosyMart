const FormInputs = ({ label, name, type, defaultValue }) => {
	return (
		<div className="form-controls">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				placeholder="Type here"
				className="input input-bordered"
			/>
		</div>
	);
};
export default FormInputs;
