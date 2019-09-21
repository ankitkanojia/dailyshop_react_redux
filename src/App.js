import React from 'react';
import Header from './component/header';
import Main from './containers/main';

function App() {
  return (
    <div className="App">
       <Header />
        <main className="container">
          <Main />
        </main>
    </div>
  );
}

export default App;
