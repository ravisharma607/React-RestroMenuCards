import React from 'react';
import './Style.css';
const Navbar = ({ filterItem, menuList }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RV-restro</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              {
                menuList.map((curElem) => {
                  return (
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" onClick={() => filterItem(curElem)}>{curElem}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
