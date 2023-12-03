import DesiginationTable from '../PageComponent/Product-ProductDetail/DesiginationTable';
import DesiginationForm from '../PageComponent/Product-ProductDetail/DesiginationForm';
import PageNameNavigate from '../Component/PageNameNavigate';
import { useDispatch, useSelector } from 'react-redux';
import { setdesiginationform } from '../redux/actions/productaction';
import React from 'react';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const showForm = useSelector(state => state.showForm.showform);

  const handleAddDesignation = () => {
    dispatch(setdesiginationform(!showForm));
  };

  return (
    <>
      <PageNameNavigate />
      <div className="col-sm-12">
        <div className="d-flex justify-content-end mb-3">
          {!showForm ? (
            <button type="button" className="btn btn-primary" onClick={handleAddDesignation}>
              Add Designation
            </button>
          ) : (
            ''
          )}
        </div>
        {showForm ? <DesiginationForm /> : <DesiginationTable />}
      </div>
    </>
  );
};

export default ProductDetail;
