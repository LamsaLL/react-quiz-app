
// import React, { useState } from 'react';
import Card from './components/Card/Card.jsx';
import Layout from './components/Layout/Layout.jsx';
import Button from './components/Button/Button.jsx'

const App = () => { 
  return (
    <Layout className="h-screen items-center justify-center">
      <div className="container">
        <Card className="shadow-2xl">
          <div className="p-4 text-center text-xl">
            Blablabla?
          </div>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            <Button text="Vraie"> </Button>
            <Button text="Faux"> </Button>
            <Button text="Valider"> </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
