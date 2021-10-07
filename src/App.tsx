import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import './App.css';
import RepoList from './Components/RepoList';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h3> Search For a Package</h3>
        <RepoList />
      </div>
    </Provider>
  );
}

export default App;
