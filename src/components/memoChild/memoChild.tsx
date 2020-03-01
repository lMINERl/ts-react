import React, { ReactElement, useEffect } from 'react';

let render: number = 0;
const MemoChild: React.FC = (): ReactElement => {
  useEffect(() => {
    render++;
  });
  return <div data-testid="render-count">render count : {render}</div>;
};

export default MemoChild;
