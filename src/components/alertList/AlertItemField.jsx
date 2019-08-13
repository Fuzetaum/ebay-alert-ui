import PropTypes from 'prop-types';
import React from 'react';

import './AlertItemField.css';

const AlertItemField = ({
  label,
  value,
}) => (
  <div className="alert-item-field">
    <p>{label}</p>
    <span>{value}</span>
  </div>
);

AlertItemField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

AlertItemField.defaultProps = {
  value: '',
};

export default AlertItemField;
