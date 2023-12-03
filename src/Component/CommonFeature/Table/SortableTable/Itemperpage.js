// ItemsPerPageSelect.js
import React from 'react';

const ItemsPerPageSelect = ({ itemsPerPage, handleItemsPerPageChange }) => (
  <div className="mb-3">
    <label htmlFor="itemsPerPageSelect" className="form-label">Items per Page:</label>
    <select
      id="itemsPerPageSelect"
      className="form-select"
      value={itemsPerPage}
      onChange={handleItemsPerPageChange}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="150">150</option>
      <option value="300">300</option>

    </select>
  </div>
);

export default ItemsPerPageSelect;
