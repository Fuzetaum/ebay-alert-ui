import { Card } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AlertItem from './AlertItem';

import { fetchAlertConfigurations, selectAlertItem } from '../../redux/actions/alerts';
import noop from '../../utils/noop';

import './AlertList.css';

const cardBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const AlertList = ({
  onFetchAlertConfigurations,
  onSelectAlertItem,
  list,
  selected,
}) => {
  const isItemSelected = (alert) => {
    if (!selected) {
      return false;
    }
    return (alert.email === selected.email) && (alert.query === selected.query);
  };

  useEffect(() => {
    onFetchAlertConfigurations(1);
  }, []);

  return (
    <Card id="alert-list-card" bodyStyle={cardBodyStyle}>
      {list.map((alert, index) =>
        <AlertItem
          alert={alert}
          key={`${alert.email}-${index}`}
          isSelected={isItemSelected(alert)}
          onClick={() => { onSelectAlertItem(alert); }}
        />
      )}
    </Card>
  );
};

AlertList.propTypes = {
  onFetchAlertConfigurations: PropTypes.func,
  onSelectAlertItem: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
};

AlertList.defaultProps = {
  onFetchAlertConfigurations: noop,
  onSelectAlertItem: noop,
  list: [],
  selected: null,
};

const mapStateToProps = ({ alerts }) => ({ ...alerts });

const mapDispatchToProps = {
  onFetchAlertConfigurations: fetchAlertConfigurations,
  onSelectAlertItem: selectAlertItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertList);
