import Home from './components/Home/Home';
import About from './pages/About';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Calendar from './components/Home/Calendar/Calendar';

function App() {
  return ( 
  
   <>
   <Header />
     <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" >
        <About />
        </Route>
    </Switch>
   
    </>
   
     ) 
}

export default App;
