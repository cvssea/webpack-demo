import './main.scss';
import { run } from './app/app';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';

const alertService = new AlertService();
const componentService = new ComponentService();

alertService.hideErrorBox();

run(alertService, componentService);
