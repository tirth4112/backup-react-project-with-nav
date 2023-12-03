import React, { useState } from 'react';

const DesiginationForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card w-100">
              <div className="card-header">
                <h3 className="card-title">Designation Form</h3>
              </div>
              <div className="card-body">
                <form id="quickForm">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="terms"
                        className="custom-control-input"
                        id="exampleCheck1"
                      />
                      <label className="custom-control-label" htmlFor="exampleCheck1">
                        I agree to the <a href="#">terms of service</a>.
                      </label>
                    </div>
                  </div>                </form>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary ml-2" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal d-block" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Submission</h5>
                <button type="button" className="close" onClick={handleCancel}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to submit the form?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleCancel}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesiginationForm;














// [
//   {
//     "name": "name",
//     "label": "Name",
//     "type": "text",
//     "isRequired": false
//   },
//   {
//     "name": "email",
//     "label": "Email",
//     "type": "email",
//     "isRequired": true
//   },
//   {
//     "name": "age",
//     "label": "Age",
//     "type": "number",
//     "isRequired": false
//   },
//   {
//     "name": "gender",
//     "label": "Gender",
//     "type": "radio",
//     "options": [
//       {
//         "label": "Male",
//         "value": "male"
//       },
//       {
//         "label": "Female",
//         "value": "female"
//       },
//       {
//         "label": "Other",
//         "value": "other"
//       }
//     ],
//     "isRequired": true
//   },
//   {
//     "name": "Hb",
//     "label": "Hobbies",
//     "type": "checkbox",
//     "options": [
//       {
//         "label": "Reading",
//         "value": "reading"
//       },
//       {
//         "label": "Cooking",
//         "value": "cooking"
//       },
//       {
//         "label": "Sports",
//         "value": "sports"
//       }
//     ],
//     "isRequired": false
//   },
//   {
//     "name": "country",
//     "label": "Country",
//     "type": "select",
//     "options": [
//       {
//         "value": "usa",
//         "label": "United States of America"
//       },
//       {
//         "value": "canada",
//         "label": "Canada"
//       }
//     ],
//     "isRequired": false
//   }
// ]