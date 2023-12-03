import React from 'react';
import { useLocation } from 'react-router-dom';

const PageNameNavigate = () => {
    const location = useLocation();

    //get current path
    // debugger
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

    function joinData(index) {
        return `/${pathSegments.slice(0, index + 1).join('/')}`;
    }


    return (
        <>
         <div className="row mb-2">
            <div className="col-sm-6">
                <h1 className="m-0">{pathSegments[pathSegments.length - 1]}</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    {pathSegments.map((segment, index) => (
                        <li key={index}  className={`breadcrumb-item ${index === pathSegments.length - 1 ? 'active' : ''}`}>
                            {index === pathSegments.length - 1 ? segment : <a href={joinData(index)}>{segment}</a>}
                        </li>
                    ))}

                </ol>
            </div>
            </div>
        </>
    );
}

export default PageNameNavigate;
