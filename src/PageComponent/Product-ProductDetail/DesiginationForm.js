import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setdesiginationform } from '../../redux/actions/productaction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DesiginationForm = () => {
  const dispatch = useDispatch();
  const [Desigination, setDesigination] = useState('');

  const back = () => {
    dispatch(setdesiginationform(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Desigination submitted: ${Desigination}`);
    // Add your form submission logic here
  };

  const handleCancel = () => {
    console.log('Form submission canceled');

    toast.success('Desigination submitted successfully!', {
      position: 'top-right',
      autoClose: 1000, // Close the notification after 3 seconds
    });
    // Add your cancel logic here
  };

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i
                    className="fas fa-chevron-left mr-2"
                    onClick={back}
                    style={{ cursor: 'pointer' }}
                  ></i>
                  Desigination Form
                </h3>
              </div>
              <div className="card-body">
                <form id="quickForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Desigination Name</label>
                    <input
                      type="text"
                      name="DesiginationName"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={(e) => setDesigination(e.target.value)}
                      placeholder="Enter Desigination"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button type="button" className="btn btn-secondary ml-2" onClick={handleCancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add this component to display toast notifications */}

    </div>

  );
};

export default DesiginationForm;
