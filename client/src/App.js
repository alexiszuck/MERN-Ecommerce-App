import React from 'react';

import DefaultLayout from './layouts/DefaultLayout';
import Home from './components/pages/home/Home';

function App() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default App;
