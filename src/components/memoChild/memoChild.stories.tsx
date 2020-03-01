import * as React from 'react';
import { storiesOf } from '@storybook/react'
import MemoChild from './memoChild';
storiesOf('MemoChild', module).add('MemoChild', () => (
    <div>
      <MemoChild  />
    </div>

))