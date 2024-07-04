
import './App.css';
import Navbar from './components/Navbar';
import Liberary from './components/Liberary';
// import { useState } from'react'
import { Link, Routes, Route } from 'react-router-dom';
import Shelf from './components/Shelf';


function App() {
  // const [inputValue, setInputValue] = useState('')
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/Shelf' element={<Shelf />} />
      <Route path='/' element={<Liberary />} />

        </Routes>
      

    </div>
  );
}

export default App;
