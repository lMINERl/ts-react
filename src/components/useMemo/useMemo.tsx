import React, { useState, ReactElement, useMemo } from 'react';
import MemoChild from '../memoChild';

import UseMemoProps from './useMemoProps';

const UseMemo: React.FC<UseMemoProps> = (props: UseMemoProps): ReactElement => {
  // States
  const [i, setI]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  // functions

  // handles
  const incrementHndl: () => void = (): void => {
    setI(i + 1);
  };
  const memoChild: ReactElement = useMemo(() => {
    return <MemoChild />;
  }, []);
  // render
  return (
    <div className="App">
      <header className="App-header">
        <h3>UseMemo</h3>
        <h2 data-testid="number-display">i : {i}</h2>
        <MemoChild />
        <div> {memoChild} </div>
        <button data-testid="incremental-button" onClick={incrementHndl}>
          Increment I
        </button>
      </header>
    </div>
  );
};

export default UseMemo;
