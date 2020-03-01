import React, { ReactElement, Suspense } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

// import UseMemo from '../components/useMemo';
import UseMemoError from '../components/useMemo/Error';
import UseMemoProps from '../components/useMemo/useMemoProps';
import Users from '../components/users';

const LazyUseMemo: React.LazyExoticComponent<React.FC<UseMemoProps>> = React.lazy(() =>
  import('../components/useMemo')
);

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Users />
      </header>
      <Suspense fallback={<UseMemoError />}>
        <LazyUseMemo initiate={true} />
      </Suspense>
    </div>
  );
};

export default App;
