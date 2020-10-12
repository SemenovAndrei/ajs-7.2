/* eslint-disable no-console */
import Validator from './validator';

const name = 'name';
const validator = new Validator(name);

console.log(validator.validateUsername());
