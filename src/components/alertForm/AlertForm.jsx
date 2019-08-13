import {
  Button,
  Card,
  Input,
  Row,
  Select,
  message,
} from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectAlertItem } from '../../redux/actions/alerts';

import noop from '../../utils/noop';

import './AlertForm.css';

const { Option } = Select;

const AlertForm = ({ alert, onSelectAlertItem }) => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [frequency, setFrequency] = useState(0);

  const cleanData = () => {
    setEmail('');
    setQuery('');
    setFrequency(0);
  };

  const onChangeData = (field, value) => {
    if (field === 'email') {
      setEmail(value);
      onSelectAlertItem({ email: value, query, frequency });
    } else if (field === 'query') {
      setQuery(value);
      onSelectAlertItem({ email, query: value, frequency });
    } else {
      setFrequency(value);
      onSelectAlertItem({ email, query, frequency: value });
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!email || !query || !frequency) {
      message.error('Please enter values in all fields');
      return;
    }
    message.success('Alert configuration saved!');
    cleanData();
    onSelectAlertItem(null);
  };

  useEffect(() => {
    cleanData();
    if (!!alert) {
      setEmail(alert.email);
      setQuery(alert.query);
      setFrequency(alert.frequency);
    }
  }, [alert]);

  return (
    <Card id="alert-form-card">
      <form onSubmit={(event) => onSubmitForm(event)}>
        <Row className="alert-form-row">
          <p>Email</p>
          <Input
            value={email}
            name="email"
            onChange={(event) => onChangeData('email', event.target.value)}
          />
        </Row>
        <Row className="alert-form-row">
          <p>Search query</p>
          <Input
            value={query}
            name="query"
            onChange={(event) => onChangeData('query', event.target.value)}
          />
        </Row>
        <Row className="alert-form-row">
          <p>Alert frequency</p>
          <Select
            id="alert-form-frequency-select"
            placeholder="Select frequency"
            value={frequency || undefined}
            onChange={value => onChangeData('frequency', value)}
          >
            <Option value={2}>2 minutes</Option>
            <Option value={10}>10 minutes</Option>
            <Option value={30}>30 minutes</Option>
          </Select>
        </Row>
        <Row>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Row>
      </form>
    </Card>
  );
};

AlertForm.propTypes = {
  alert: PropTypes.shape({}),
  onSelectAlertItem: PropTypes.func,
};

AlertForm.defaultProps = {
  alert: null,
  onSelectAlertItem: noop,
};

const mapStateToProps = ({ alerts }) => ({ alert: alerts.selected });

const mapDispatchToProps = {
  onSelectAlertItem: selectAlertItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertForm);