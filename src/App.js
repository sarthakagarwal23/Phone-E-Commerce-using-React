import React , {Component}  from 'react';
import { Switch , Route , BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends React.Component {
  render(){
  return (
 <React.Fragment>
     <Navbar></Navbar>
     <Router>
     <Switch>
     <Route exact path="/" component={ProductList}></Route>
     <Route path="/details" component={Details}></Route>
     <Route path="/cart" component={Cart }></Route>
     <Route  component={Default}></Route>
     </Switch>
     </Router>
 </React.Fragment>
  );
}
}

export default App;
