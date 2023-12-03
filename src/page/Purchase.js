import React from 'react';
import PageNameNavigate from '../Component/PageNameNavigate';
//step 1 import sortedtable

import SortableTable from '../Component/CommonFeature/Table/SortableTable';

const Purchase = () => {

       //step 2 load data and columns that is require
       const data = [
              {
                     'Rendering engine': 'Trident',
                     'Browser': 'Internet Explorer 4.0',
                     'Platform(s)': 'Win 95+',
                     'Engine version': '4',
                     'CSS grade': 'X',
              },
              {
                     'Rendering engine': 'Aman',
                     'Browser': 'Opera Explorer 5.0',
                     'Platform(s)': 'PP 95+',
                     'Engine version': '5',
                     'CSS grade': 'Coo',
              },
              {
                     'Rendering engine': 'Trident',
                     'Browser': 'Internet Explorer 5.0',
                     'Platform(s)': 'Win 95+',
                     'Engine version': '5',
                     'CSS grade': 'C',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Firefox 1.0',
                     'Platform(s)': 'Win 98+ / OSX.2+',
                     'Engine version': '1.7',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Firefox 1.5',
                     'Platform(s)': 'Win 98+ / OSX.2+',
                     'Engine version': '1.8',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Webkit',
                     'Browser': 'Safari 1.2',
                     'Platform(s)': 'OSX.3',
                     'Engine version': '125.5',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Firefox 2.0',
                     'Platform(s)': 'Win 98+ / OSX.2+',
                     'Engine version': '1.8',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Trident',
                     'Browser': 'Internet Explorer 5.5',
                     'Platform(s)': 'Win 95+',
                     'Engine version': '5.5',
                     'CSS grade': 'B',
              },
              {
                     'Rendering engine': 'Trident',
                     'Browser': 'Internet Explorer 6',
                     'Platform(s)': 'Win 98+',
                     'Engine version': '6',
                     'CSS grade': 'B',
              },
              {
                     'Rendering engine': 'Webkit',
                     'Browser': 'Safari 2.0',
                     'Platform(s)': 'OSX.4+',
                     'Engine version': '416.11',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Webkit',
                     'Browser': 'Safari 3.0',
                     'Platform(s)': 'OSX.4+',
                     'Engine version': '522.1',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Camino 1.0',
                     'Platform(s)': 'OSX.2+',
                     'Engine version': '1.8',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Camino 1.5',
                     'Platform(s)': 'OSX.3+',
                     'Engine version': '1.8',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Netscape 7.2',
                     'Platform(s)': 'Win 95+ / Mac OS 8.6-9.2',
                     'Engine version': '1.7',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Netscape Browser 8',
                     'Platform(s)': 'Win 98SE+',
                     'Engine version': '1.7',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Netscape Navigator 9',
                     'Platform(s)': 'Win 98+ / OSX.2+',
                     'Engine version': '1.8',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Webkit',
                     'Browser': 'Safari 3.2',
                     'Platform(s)': 'OSX.4+',
                     'Engine version': '525.0',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Mozilla 1.0',
                     'Platform(s)': 'Win 95+ / OSX.1+',
                     'Engine version': '1',
                     'CSS grade': 'A',
              },
              {
                     'Rendering engine': 'Gecko',
                     'Browser': 'Mozilla 1.1',
                     'Platform(s)': 'Win 95+ / OSX.1+',
                     'Engine version': '1.1',
                     'CSS grade': 'A',
              },

       ];
       const columns = (data.length > 0) && Object.keys(data[0]).map((key) => ({
              key: key,
              label: key,
       }));

       return (
              <>
                     <PageNameNavigate />
                     <div className="container mt-5">
                            <div className="card">
                                   <div className="card-header">
                                          <h3 className="card-title">DataTable with dynamic columns</h3>
                                   </div>
                                   <div className="card-body">
                                          {/* step3 data and column user need to give */}

                                          <SortableTable data={data} columns={columns} />
                                   </div>
                            </div>
                     </div>
              </>
       );
};

export default Purchase;
