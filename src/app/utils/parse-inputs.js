export const parseInputs = (...inputs) => {
	return inputs.map(input => parseInt(input.value));
};
