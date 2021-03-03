import React from 'react';
import Grid from '../src';

import '../src/es/components/grid/style/index.css';
import './style.less';

const Base = (): JSX.Element => {
  return (
    <Grid className="demo">
      <Grid className="box" span={12}>
        span=12
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
    </Grid>
  );
};

export default Base;
