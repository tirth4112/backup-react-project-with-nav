
// Initialvalues.js
export const Initialvalues = (sampleFieldDefinitions) => {
    const initialValues = {};
  
    sampleFieldDefinitions.forEach((field) => {
      if(field.type==='number')
      {
        initialValues[field.name] = 0;

      }
      else if(field.type==='checkbox')
      {
        initialValues[field.name] = [];

      }
      else
      {
      initialValues[field.name] = "";
      }
    });
  
    return initialValues;
  };