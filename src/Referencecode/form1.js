
import React, { useEffect, useState } from 'react';
import PageNameNavigate from '../Component/PageNameNavigate';
//step 1
import ReusableForm from '../Component/CommonFeature/Form/ReusableForm1';
import { transformFieldDefinitions } from '../Component/CommonFeature/Form/TransformedFieldDefinations';
import { Initialvalues } from '../Component/CommonFeature/Form/Initialvalues';
import axios from 'axios'


function SaleDetail() {

  //step2
  const [fieldDefinitions, setFieldDefinitions] = useState([]);
  const [initialValues, setInitialValues] = useState({});

  //step3
  useEffect(() => {

    axios
      .get('https://mocki.io/v1/99a7f1ec-fb0f-4de8-a39f-5c59a8f2941d'
        // https://mocki.io/v1/93941633-a33b-43f2-8ae9-d291813e2f67'
      )
      .then((response) => {
        setFieldDefinitions(transformFieldDefinitions(response.data));
        setInitialValues(Initialvalues(response.data));

      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });

  }, []);


  //step 5
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <PageNameNavigate />
      {fieldDefinitions.length > 0 && (

        //step 4
        <ReusableForm
        //header
          Header={"UserDetail"}
          //initial value
          initialValues={initialValues}
          //fields
          fieldDefinitions={fieldDefinitions}
          //return data
          onSubmit={handleSubmit}
        />

      )}
    </div>
  );
}

export default SaleDetail;
