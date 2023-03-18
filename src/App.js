import React from 'react'
import Calculate from './components/Calculate'
import Dice from './components/Dice'
import { CalProvider } from './CalContext'

import './App.css'

function App() {
  return (
    <CalProvider>
      <div className="flex">
        <Calculate />
        <Dice />
      </div>
    </CalProvider>
  );
}

export default App;
