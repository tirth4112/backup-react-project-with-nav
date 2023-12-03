
import React, { useState } from 'react';
import TableHeader from './SortableTable/TableHeader';
import TableBody from './SortableTable/TableBody';
import Pagination from './SortableTable/Pagination';
import ItemsPerPageSelect from './SortableTable/Itemperpage';

const SortableTable = ({ data, columns }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const sortedData = () => {
        let sortableData = [...data];
        if (sortConfig.key) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    };

    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
    };

    return (
        <div>
            {data.length === 0 ? (
                <p>No data available.</p>
            ) : (<>
                <ItemsPerPageSelect itemsPerPage={itemsPerPage} handleItemsPerPageChange={handleItemsPerPageChange} />

                <table className="table table-bordered table-striped">
                    <TableHeader columns={columns} sortConfig={sortConfig} requestSort={requestSort} />
                    <TableBody data={sortedData()} columns={columns} />
                </table>
                </>
            )}
            {data.length > 0 && (
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p>Displaying {Math.min(data.length, (currentPage + 1) * itemsPerPage)} of {data.length} items</p>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>
            )}
        </div>
    );
};

export default SortableTable;
