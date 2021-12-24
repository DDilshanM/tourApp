
import { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar'; 
import TourList from './components/tourLIst';

class App extends Component{
  render(){
    return(
      <main>
      <NavBar/>;
      <TourList/>;

   </main>
    )
  
    

  }
}

export default App;
