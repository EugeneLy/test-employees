import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Employee.scss';

const Employee = (props) => {
  const {
    first_name, last_name, email,
    avatar, company, adress, phone
  } = props.employee;

  return (
    <li className="employee">
      <Link to="/about">
        <div className="row-info picture">
          <img src={avatar} alt={first_name} />
        </div>
        <div className="row-info">
          <span>
            First name:
          </span>
          {first_name}
        </div>
        <div className="row-info">
          <span>
            Last name:
          </span>
          {last_name}
        </div>
        <div className="row-info">
          <span>
             Email:
          </span>
          {email}
        </div>
        <div className="row-info">
          <span>
            Company:
          </span>
          {company}
        </div>
        <div className="row-info">
          <span>
            Adress:
          </span>
          {adress}
        </div>
        <div className="row-info">
          <span>
            Phone:
          </span>
          {phone}
        </div>
      </Link>
    </li>
  );
};

Employee.propTypes = {
  employee: PropTypes.objectOf(PropTypes.any)
};

export default Employee;
