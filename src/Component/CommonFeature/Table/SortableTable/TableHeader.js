// TableHeader.js
import React from 'react';

const TableHeader = ({ columns, sortConfig, requestSort }) => (
  <thead>
    <tr>
      {columns.map((column) => (
        <th
          key={column.key}
          onClick={() => requestSort(column.key)}
          className={sortConfig.key === column.key ? sortConfig.direction : ''}
        >
          {column.label} {sortConfig.key === column.key && (sortConfig.direction === 'ascending' ? '⬆️' : '⬇️')}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
