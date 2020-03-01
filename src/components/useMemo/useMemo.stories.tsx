import * as React from 'react';
import { storiesOf } from '@storybook/react';
import UseMemo from './useMemo';
storiesOf('UseMemo', module).add('UseMemo', () => (
  <div>
    <UseMemo initiate={false} />
  </div>
));
