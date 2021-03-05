import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import GeneratedData from './Data/data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    setData(GeneratedData);
  }, [])
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/manage">
            <Inventory/>
          </Route>
          <Route exact path="/">
            <Shop/>
          </Route>
          <Route path="/product/:key">
            <ProductDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
