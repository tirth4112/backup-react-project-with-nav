import React, { useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useActiveRouteContext } from './ActiveRouteContext'; // Adjust the import path accordingly


//putting item into routes


const MenuItem = ({ label, icon, path, children, nestingLevel }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeRoute, setActiveRoute } = useActiveRouteContext(); // Use the active route context

  const isActive = location.pathname.startsWith(path) || activeRoute.startsWith(path);

  const handleClick = () => {
    if (!children) {
      setActiveRoute(path); // Update the active route in the context
      navigate(path);
    }
  };

  const fontSize = 14 - nestingLevel * 4; // Calculate font size dynamically

  return (
    <li className={`nav-item ${children ? 'treeview' : ''}`}>
      {!children ? (
        <NavLink
          to={path}
          onClick={handleClick}
          activeClassName={isActive ? 'active' : ''}
          className="nav-link"
          style={{ fontSize: `${fontSize}px` }}
        >
          <i className={`nav-icon ${icon}`} />
          <p>{label}</p>
        </NavLink>
      ) : (
        <a
          onClick={handleClick}
          className={`nav-link ${isActive ? 'active' : ''} nested-item`}
          style={{ fontSize: `${fontSize}px` }}
        >
          <i className={`nav-icon ${icon}`} />
          <p>
            {label}
            <i className="right fas fa-angle-left" />
          </p>
        </a>
      )}
      {children && <ul className="nav nav-treeview">{children}</ul>}
    </li>
  );
};

const Menu = ({ menuData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  //extends data
  const renderMenuItem = (menuItem, parentPath = '', nestingLevel = 0) => {
    const fullPath = parentPath + '/' + menuItem.path; // Construct the full path
    return (
      <MenuItem
        key={fullPath} // Use the full path as the key
        label={menuItem.label}
        icon={menuItem.icon}
        path={menuItem.Path || fullPath}
      >
        {menuItem.children && menuItem.children.map((child) => renderMenuItem(child, fullPath, nestingLevel + 1))}
      </MenuItem>
    );
  };

  //ui of the page
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
          </div>
          <div className="info">
            <a href="#" className="d-block">Alexander Pierce</a>
          </div>
        </div>



        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {menuData.map((menuItem) => renderMenuItem(menuItem))}
          </ul>


        </nav>
      </div>
    </aside>
  );
}

export default Menu;
