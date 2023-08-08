import React from 'react';
import { Header, LoadTotalOrder } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <LoadTotalOrder />
      </section>
    </div>
  );
}

export default App;
