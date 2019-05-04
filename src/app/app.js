import { parseInputs } from './utils/parse-inputs';
import { areInputsValid } from './utils/are-inputs-valid';

export const run = (alertService, componentService) => {
	// Button click handler
	componentService.onClick(() => {
		const { firstNum, secondNum } = componentService;

		if (!areInputsValid(firstNum, secondNum)) {
			return;
		}

		// Get result
		const result = componentService.calculate(parseInputs(firstNum, secondNum));

		//Display result
		componentService.displayResult(result);

		// Hide errorBox
		alertService.hideErrorBox();
	});
};
