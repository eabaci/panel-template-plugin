// Libraries
import React, { PureComponent } from 'react';

// Components
import { PanelProps } from '@grafana/ui';

export class Panel extends PureComponent<PanelProps> {
  render() {
    return (
      <div>
        <p>Panel View</p>
      </div>
    );
  }
}
