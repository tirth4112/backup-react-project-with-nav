import * as Yup from 'yup';
import { fieldTypeToValidation } from '../../../Validation/ValidationUtils';

export function transformFieldDefinitions(sampleFieldDefinitions) {
  return sampleFieldDefinitions.map((field) => {
    const validationFunction = fieldTypeToValidation[field.type];

    if (!validationFunction) return null;

    let validationSchema = Yup.mixed();

    if (field.isRequired) {
      validationSchema = validationSchema.concat(validationFunction(field.name));
      validationSchema = validationSchema.required(`${field.label} is required`);
    }

    return {
      name: field.name,
      label: field.label,
      type: field.type,
      options: field.options || null,
      validation: {
        pattern: validationSchema,
        message: `${field.label} is not valid`,
      },
      isRequired: field.isRequired,
    };
  });
}
