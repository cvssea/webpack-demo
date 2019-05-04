export class AlertService {
	constructor() {
		this.errorBox = document.getElementById('error');
	}

	hideErrorBox() {
		this.errorBox.classList.add('invisible');
		this.errorBox.innerText = '';
	}

	/**
   * Receives invalid inputs
   * Updates DOM to reflect errors
   */
	handleErrors(invalidInputs) {
		// Create error messages
		const errors = invalidInputs.reduce((err, input) => {
			if (input.value === '') {
				err.push('field requires a number input');
				return err;
			}
			err.push(`'${input.value}' is not a number`);
			return err;
		}, []);

		// Display error message
		const errorMessage = `Oops!: ${errors.join(', ')}`;
		this.errorBox.classList.remove('invisible');
		this.errorBox.innerText = errorMessage;
	}
}
