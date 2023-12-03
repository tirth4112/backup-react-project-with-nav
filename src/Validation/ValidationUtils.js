
import * as Yup from 'yup';

// Common validation functions
export const textValidation = (fieldName) =>
  Yup.string()
    .min(5, `${fieldName} must be at least 5 characters`)
    .max(10, `${fieldName} is too long`);

export const emailValidation = (fieldName) =>
  Yup.string().email(`Invalid ${fieldName}`).max(100, `${fieldName} is too long`);

export const numberValidation = (fieldName) =>
  Yup.number().min(18, `${fieldName} must be at least 18`).max(99, `${fieldName} is too large`);

export const dateValidation = (fieldName) =>
  Yup.date().typeError(`Invalid ${fieldName}`);

export const passwordValidation = (fieldName) =>
  Yup.string()
    .min(8, `${fieldName} must be at least 8 characters`)
    .max(20, `${fieldName} is too long`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      `${fieldName} must contain at least 8 characters, including one letter and one number`
    );

export const requiredValidation = (fieldName) =>
  Yup.string().required(`${fieldName} is required`);

export const urlValidation = (fieldName) =>
  Yup.string().url(`Invalid ${fieldName}`);

// Custom validation for radio buttons (at least one option must be selected)
export const radioValidation = (fieldName) =>
  Yup.string().test('at-least-one-selected', `${fieldName} requires at least one option to be selected`, (value) => {
    return value && value.length > 0;
  });

// Custom validation for checkboxes (at least one checkbox must be checked)
export const checkboxValidation = (fieldName) =>
  Yup.array().test('at-least-one-checked', `${fieldName} requires at least one checkbox to be checked`, (value) => {
    return Array.isArray(value) && value.length > 0;
  });

  export const selectValidation = (fieldName) =>
  Yup.string().required(`Please select a ${fieldName}`);

// Map field types to validation functions
export const fieldTypeToValidation = {
  text: textValidation,
  email: emailValidation,
  number: numberValidation,
  date: dateValidation,
  password: passwordValidation,
  required: requiredValidation,
  url: urlValidation,
  select:selectValidation,
  radio: radioValidation, // Custom radio button validation
  checkbox: checkboxValidation, // Custom checkbox validation
  // Add more field types and validation functions as needed
};
