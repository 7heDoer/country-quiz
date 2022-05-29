import { useState } from 'react'
import {raw} from './util/clean_api.js';
// import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)
  console.log(raw)

  return (
    <div className="App">
      App.js
    </div>
  )
}

export default App
