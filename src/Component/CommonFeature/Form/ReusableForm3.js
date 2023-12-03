
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fieldTypeToValidation } from '../../../Validation/ValidationUtils';

function ReusableForm3({Header, initialValues, fieldDefinitions, onSubmit }) {


  const validationSchema = Yup.object().shape(
    fieldDefinitions.reduce((schema, field) => {


      const validationFunction = fieldTypeToValidation[field.type];
      if (field.isRequired) {
        if (validationFunction) {
          let fieldSchema = validationFunction(
            field.name,
            field.validation.minLength,
            field.validation.maxLength
          );


          schema[field.name] = fieldSchema.required(`${field.label} is required`);
        }
      }

      return schema;
    }, {})
  );

  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values) => {
      const isAllFieldsFilled = fieldDefinitions.every((field) => {
        if (field.isRequired) {
          return values[field.name] !== '';
        }
        return true; // Non-required fields are always considered filled
      });

      if (isAllFieldsFilled) {
       
        alert("got");
        onSubmit(values);
      } else {
        alert("Please fill out all required fields.");
      }
    }

  });

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">{Header}</h3>
              </div>
              <div className="card-body">

                {!formik.isValid && (
                  <div className="alert " role="alert" style={{ borderColor: 'red', color: 'red', textAlign: "center" }}>
                    Please fix the errors in the fields before submitting the form.
                  </div>
                )}

                <form onSubmit={formik.handleSubmit} id="quickForm">
                  {fieldDefinitions.map((field) => (
                    <div key={field.name} className="form-group">
                      {field.isRequired && (
                        <label htmlFor={field.name}>
                          {field.label} <span className="text-danger">*</span>
                        </label>
                      )}
                      {!field.isRequired && (
                        <label htmlFor={field.name}>{field.label}</label>
                      )}

                      
                      {field.type !== 'radio' && field.type !== 'checkbox' && (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values[field.name]}
                          className={`form-control ${formik.touched[field.name] && formik.errors[field.name]
                            ? 'is-invalid'
                            : ''
                            }`}
                          placeholder={`Enter ${field.label}`}
                        />
                      )}
                      {field.type === 'radio' && (
                        <>
                          {field.options.map((option, index) => (
                            <div key={index} className="form-check">
                              <input
                                type="radio"
                                id={`${field.name}_${index}`}
                                name={field.name}
                                value={option.value}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`form-check-input ${formik.touched[field.name] && formik.errors[field.name]
                                  ? 'is-invalid'
                                  : ''
                                  }`}
                              />
                              <label
                                htmlFor={`${field.name}_${index}`}
                                className="form-check-label"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </>
                      )}
                      {field.type === 'checkbox' && (
                        <>
                          {field.options.map((option, index) => (
                            <div key={index} className="form-check">
                              <input
                                type="checkbox"
                                id={`${field.name}_${index}`}
                                name={field.name}
                                value={option.value}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`form-check-input ${formik.touched[field.name] && formik.errors[field.name]
                                  ? 'is-invalid'
                                  : ''
                                  }`}
                              />
                              <label
                                htmlFor={`${field.name}_${index}`}
                                className="form-check-label"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </>
                      )}
                      {field.type === 'select' && (

                        <select
                          id={field.name}
                          name={field.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values[field.name]}
                          className={`form-control ${formik.touched[field.name] && formik.errors[field.name]
                            ? 'is-invalid'
                            : ''
                            }`}
                          style={{ whiteSpace: 'nowrap' }} // Add this style to prevent text wrapping
                        >
                          <option value="" label={`Select ${field.label}`} />
                          {field.options.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}

                      {formik.touched[field.name] && formik.errors[field.name] && (
                        <div className="invalid-feedback">
                          {formik.errors[field.name]}
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReusableForm3;














