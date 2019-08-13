import { Button, Card } from 'antd';
import React from 'react';

import './ActionBar.css';

const ActionBar = () => {
  return (
    <Card bodyStyle={{ padding: '12px 24px' }}>
      <Button type="primary">Submit</Button>
    </Card>
  );
};

export default ActionBar;