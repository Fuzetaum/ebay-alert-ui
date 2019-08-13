import PropTypes from 'prop-types';
import React from 'react';

import AlertItemField from './AlertItemField';

import noop from '../../utils/noop';

import './AlertItem.css';

const AlertItem = ({ alert, onClick, isSelected }) => (
  <div
    className={`alert-list-item ${isSelected ? 'alert-list-item-selected' : ''}`}
    role="button"
    onClick={onClick}
    onKeyPress={noop}
  >
    <AlertItemField label="Email" value={alert.email} />
    <AlertItemField label="Search query" value={alert.query} />
    <AlertItemField label="Frequency" value={`${alert.frequency} minutes`} />
  </div>
);

AlertItem.propTypes = {
  alert: PropTypes.shape({}),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

AlertItem.defaultProps = {
  alert: {},
  onClick: noop,
  isSelected: false,
};

export default AlertItem;
