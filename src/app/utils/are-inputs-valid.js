/**
 * Takes raw elements as parameters
 * Returns true if element values are numbers
 * Calls an error handler if invalid inputs and returns false
 */

import { AlertService } from '../alert.service';

const alertService = new AlertService();

export const areInputsValid = (...elements) => {
  const invalidInputs = elements.reduce((acc, el) => {
    if (isNaN(el.value) || el.value === '') {
      acc.push(el);
    }
    return acc;
  }, []);

  if (invalidInputs.length) {
    alertService.handleErrors(invalidInputs);
    return false;
  }
  return true;
};
