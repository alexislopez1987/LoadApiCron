import React, { Suspense }  from 'react';
import Spinner from './components/layout/Spinner';
import Header from './components/layout/Header';
import Articles from './components/articles/Articles'
import './App.css';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Articles />
    </Suspense>
  );
}

export default App;
