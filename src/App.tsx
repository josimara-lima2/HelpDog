import React from 'react';
import logo from './logo.svg';
import './App.css';
import dogImg from './assets/images/dog.png'
import Header from './components/Header/Header';
import TextContainer from './components/TextContainer/TextContainer';
function App() {
  return (
    <div>
       <Header/>
      
       <div className="App">
     
       <TextContainer/>
     <img width='30%' src={dogImg} alt="dog"></img>
    </div>
    </div>
    
  );
}

export default App;
