import { Card, Form } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const AlertForm = ({ form }) => {
  return (
    <Card bodyStyle={{ padding: '20px' }}>
      <p>Hello</p>
    </Card>
  );
};

AlertForm.propTypes = {
  form: PropTypes.shape({}),
};

AlertForm.defaultProps = {
  form: {},
};

const WrappedAlertForm = Form.create({})(AlertForm);
export default WrappedAlertForm;
