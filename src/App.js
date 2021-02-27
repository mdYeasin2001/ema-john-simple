import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import GeneratedData from './Data/data.json';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    setData(GeneratedData);
  }, [])
  return (
    <div>
      <Header/>
      <Shop/>
    </div>
  );
}

export default App;
